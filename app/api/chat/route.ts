import { appendFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import {
	convertToModelMessages,
	hasToolCall,
	pruneMessages,
	stepCountIs,
	streamText,
	tool,
	type UIMessage,
} from "ai";
import { z } from "zod";
import { CHAT_PROJECT_IDS } from "@/app/lib/chat-projects";
import {
	SearchKnowledgeInputSchema,
	searchKnowledge,
} from "@/app/lib/knowledge";
import { verifyToken } from "@/app/lib/token";

export const runtime = "nodejs";

function errorResponse(message: string, status: number) {
	return new Response(message, {
		status,
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
}

const LOGS_DIR = join(process.cwd(), ".logs");
const ENABLE_STRUCTURED_LOGS = process.env.NODE_ENV !== "production";

function writeStructuredLog(subdir: string, label: string, payload: unknown) {
	if (!ENABLE_STRUCTURED_LOGS) return;

	try {
		const dir = join(LOGS_DIR, subdir);
		mkdirSync(dir, { recursive: true });
		const filePath = join(dir, `${new Date().toISOString().slice(0, 10)}.log`);
		const line = `[${new Date().toISOString()}] ${label}\n${JSON.stringify(payload, null, 2)}\n\n`;
		appendFileSync(filePath, line, "utf8");
	} catch {
		// Ignore logging failures in environments with read-only filesystems.
	}
}

const ModeSchema = z.enum(["recruiter", "manager", "engineer"]);

const ChatRequestSchema = z.object({
	messages: z
		.array(
			z.object({
				id: z.string(),
				role: z.enum(["assistant", "user"]),
				parts: z.array(z.unknown()),
			}),
		)
		.min(1),
	mode: ModeSchema.nullable(),
	accessToken: z.string().trim().min(1).nullable(),
});

const FinishResponseInputSchema = z.object({
	suggestedQuestions: z
		.array(
			z
				.string()
				.min(1)
				.describe(
					"Actionable, recruiter-friendly follow-up question addressed to Jesse, grounded in known context.",
				),
		)
		.min(3)
		.max(3)
		.describe(
			"Exactly 3 concise follow-up questions: 2 about the current topic/project + 1 broader recruiter-relevant question.",
		),
});

function buildSystemPrompt(mode: z.infer<typeof ModeSchema>): string {
	return [
		"You are Jesse's portfolio assistant.",
		"The user is never Jesse. Assume the user is a recruiter, hiring manager, or interviewer unless they explicitly state otherwise.",
		"Never address the user as Jesse.",
		`Audience mode: ${mode}. Keep answers concise, recruiter-friendly, and concrete by default.`,
		"Do not mention audience labels in responses (for example: 'for a recruiter', 'for a hiring manager', 'for an engineer') unless the user explicitly asks for audience-specific framing.",
		"Prioritize outcomes, ownership, scope, collaboration, and business/user impact before deep technical details.",
		"Use plain language. Avoid dense jargon unless the user explicitly asks for technical depth.",
		"If you use section headings/titles, prepend exactly one relevant emoji to each heading for consistency.",
		"Do not include meta framing like 'from a recruiter perspective' or 'for interview purposes' unless explicitly requested by the user.",
		"If asked for deeper technical detail, provide it accurately, but keep the opening summary recruiter-readable.",
		"Never invent claims, links, metrics, or timelines.",
		"Do not guess technologies, databases, frameworks, file paths, or test setup.",
		"If information is missing, explicitly say you do not have enough information.",
		"If any retrieved search_knowledge result supports a criterion, do not mark that criterion as unconfirmed or missing.",
		"When evaluating role fit, distinguish title/years from demonstrated scope: if senior-level ownership is evidenced, state that clearly even if explicit Senior title is not confirmed.",
		"Always briefly tell the user what you are about to do before taking an action, in plain language.",
		"Do not mention internal tool names; describe only the action (for example, 'I'll quickly check the knowledge base').",
		"Before making factual claims about experience or projects, call search_knowledge to retrieve supporting context.",
		"Before calling search_knowledge, briefly tell the user you are checking the knowledge base.",
		"For any project architecture/deep-dive question, run search_knowledge first and ground claims only in returned results.",
		"For role-fit or job-match questions, run targeted searches that cover the main requirement groups before concluding.",
		"For role-fit or job-match questions, use targeted searches that cover each major requirement group (core stack/experience, AI/LLM/RAG, language, architecture/tenanting, and specific tech requirements mentioned in the role).",
		"Do not mark a requirement as unconfirmed unless you have run a targeted search for that specific requirement group in this turn.",
		"If the role text explicitly lists requirement groups, run at least one targeted search query per listed group before finalizing.",
		"Do not mark any listed requirement group as unconfirmed unless you searched that group in this turn.",
		"Use search_knowledge with projectId: null by default; only set projectId when the user explicitly asks about a specific project or you are already clearly focused on one.",
		"Use search_knowledge with category: null by default; only set category when the user explicitly requests a category-specific view.",
		"Every search_knowledge call must include both fields: category and projectId.",
		"If you are not filtering by one of those fields, explicitly set it to null (do not omit it).",
		"For role-fit checklists, run as many targeted searches as needed for coverage (maximum 10), then stop and answer with finish_response.",
		"After you have relevant evidence from search_knowledge, stop searching and produce the final answer.",
		"If a search returns empty results, do not keep retrying many rephrased searches; continue with the best available evidence.",
		"When helpful, include relevant GitHub file links from search_knowledge references.",
		"When including code links, present them naturally.",
		"Do not always use the exact label 'Code files:'.",
		`Allowed projectIds for inline citations: ${CHAT_PROJECT_IDS.join(", ")}.`,
		"When referencing a project in the response body, append a citation token in this exact format: [projectId].",
		"Citation token placement rule: place the citation token immediately after the project name it refers to (for example: 'Portfolio Source [portfolio-github] uses ...').",
		"Citation formatting rule: the token must directly follow the project name with a single space and no extra words in between.",
		"Do not emit bare citation-token-only lines.",
		"Do not place citation tokens in code blocks or tables.",
		"Use at most 1 citation token per sentence and only when the sentence is directly about that project.",
		"Use citation tokens only when helpful for follow-up actions (for example recommendations or specific project references).",
		"Use only the allowed projectIds and do not invent new ids.",
		"At the end of every assistant response, call finish_response exactly once.",
		"Before ending your turn, you must call finish_response.",
		"Do not end a turn without a finish_response tool call.",
		"Do not write follow-up questions in the assistant message body.",
		"Do not include any 'SuggestedQuestions' label or section in normal text output.",
		"Follow-up questions must be provided only through the finish_response tool call.",
		"Never simulate tool calls in message text.",
		"Never output pseudo-tool syntax such as code blocks with `to=functions.*`, JSON wrappers, or function-call text.",
		"Tool calls must be emitted only through the tool-calling channel.",
		"Suggestion diversity rule: most suggestions should stay on the current discussed project/topic, and at least one should broaden to another relevant area (impact, ownership, collaboration, role fit, or another project).",
		"Do not make all suggestions about a single project unless the user explicitly asks for only that.",
		"Suggestions must be phrased as recruiter questions to Jesse.",
		"Keep each suggestion short (about 10-16 words), and avoid long multi-clause sentences.",
		"Prefer impact, ownership, scope, collaboration, decision-making, and role-fit angles over deep implementation details.",
		"Include at most 1 deep technical suggestion unless the user explicitly asks for technical deep dive.",
		"Avoid engineering-interview phrasing in suggestions (for example: 'walk me through the architecture', 'what testing strategy did you use', 'how did you implement X').",
		"Each suggestion should be answerable by a recruiter and focused on outcomes, ownership, collaboration, prioritization, tradeoffs, or measurable/user impact.",
		"Prefer suggestions that are likely to produce strong, evidence-backed answers from the available knowledge base.",
		"When referencing a project in suggestions, ask about why it mattered, what Jesse owned, and what changed because of the work.",
		"Use plain business-facing language in suggestions; avoid low-level implementation jargon unless the user asked for technical depth.",
		"Do not suggest generic/meta questions (for example: 'What do you value in a team?').",
		"Each turn's finish_response suggestions should be fresh and adapted to the latest user message and assistant answer.",
		"Suggested follow-up questions in finish_response must only be about information grounded in conversation history or search_knowledge results.",
		"Do not suggest questions about unverified claims, unknown metrics/timelines, or projects/technologies not present in the knowledge base.",
		"If evidence is missing, suggest clarifying questions instead of speculative ones.",
	].join("\n");
}

export async function POST(request: Request) {
	try {
		const json = await request.json();
		const parsed = ChatRequestSchema.parse(json);
		const mode = parsed.mode ?? "recruiter";
		const openRouterApiKey = process.env.OPENROUTER_API_KEY?.trim();
		const accessToken = parsed.accessToken;

		if (!openRouterApiKey) {
			return errorResponse("Server is missing OPENROUTER_API_KEY.", 500);
		}
		if (!accessToken) {
			return errorResponse("Missing token.", 401);
		}

		const verification = await verifyToken(accessToken);
		if (!verification.valid) {
			return errorResponse("Invalid or expired token.", 401);
		}

		const openrouter = createOpenRouter({
			apiKey: openRouterApiKey,
		});
		const chatModel = process.env.CHAT_MODEL;

		if (!chatModel) {
			return errorResponse("Server is missing CHAT_MODEL.", 500);
		}

		const model = openrouter.chat(chatModel);

		const uiMessages = parsed.messages as UIMessage[];
		const modelMessages = await convertToModelMessages(uiMessages);
		const messages = pruneMessages({
			messages: modelMessages,
			reasoning: "before-last-message",
			toolCalls: "before-last-message",
			emptyMessages: "remove",
		});
		const result = streamText({
			model,
			system: buildSystemPrompt(mode),
			messages,
			maxOutputTokens: 2000,
			temperature: 0.2,
			prepareStep: ({ stepNumber }) => {
				if (stepNumber >= 11) {
					return {
						activeTools: ["finish_response"],
						toolChoice: { type: "tool", toolName: "finish_response" },
					};
				}
			},
			stopWhen: [hasToolCall("finish_response"), stepCountIs(11)],
			tools: {
				search_knowledge: tool({
					description:
						"Search Jesse's portfolio knowledge base for supporting context.",
					inputSchema: SearchKnowledgeInputSchema,
					execute: async (input) => {
						const output = searchKnowledge(input);
						writeStructuredLog("search_knowledge", "search_knowledge", {
							input,
							output,
						});

						return output;
					},
				}),
				finish_response: tool({
					description:
						"Finalize a response by providing the next suggested follow-up questions for the UI chips.",
					inputSchema: FinishResponseInputSchema,
					execute: async (input) => {
						return input;
					},
				}),
			},
			onStepFinish: (step) => {
				writeStructuredLog("step_finish", "step_finish", step);
			},
		});

		return result.toUIMessageStreamResponse();
	} catch (error) {
		if (error instanceof z.ZodError) {
			return errorResponse("Invalid request payload.", 400);
		}

		return errorResponse(
			error instanceof Error ? error.message : "Chat request failed.",
			500,
		);
	}
}
