"use client";

import { type UIMessage, useChat } from "@ai-sdk/react";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { z } from "zod";
import { CHAT_PROJECTS, type ChatProjectId } from "@/app/lib/chat-projects";
import { buildProjectTellMeMorePrompt } from "@/app/lib/chat-prompts";
import { AnimationOnIntersection } from "../helpers";

const starterQuestions = [
	"Summarize Jesse’s experience, strengths, and role fit for a senior full-stack role.",
	"Summarize Jesse’s AI/LLM knowledge and how he uses AI in day-to-day software development.",
	"Give me the strongest examples of Jesse’s measurable impact and ownership.",
];

const introText =
	"I’m Jesse, a full-stack engineer focused on shipping reliable, production-ready products with measurable impact. Ask me anything, or paste a job posting and I’ll explain how my background fits.";

const InputSchema = z.object({
	text: z.preprocess(
		(value) => (typeof value === "string" ? value.trim() : value),
		z
			.string()
			.min(1, "Please enter a message.")
			.max(6000, "Message is too long. Please keep it under 6000 characters."),
	),
});

type ChatPartLike = {
	type?: string;
	text?: string;
	state?: string;
	output?: unknown;
	input?: unknown;
	args?: unknown;
};

export function Chat({ hasServerApiKey }: { hasServerApiKey: boolean }) {
	const searchParams = useSearchParams();
	const accessToken =
		searchParams.get("accessToken")?.trim() ??
		searchParams.get("t")?.trim() ??
		"";
	const promptParam = searchParams.get("prompt")?.trim() ?? "";
	const hasToken = accessToken.length > 0;
	const hasChatAccess = hasServerApiKey && hasToken;
	const hasAutoSubmittedPromptRef = useRef(false);
	const [input, setInput] = useState("");
	const [inputError, setInputError] = useState<string | null>(null);

	const { messages, sendMessage, stop, status, error } = useChat({
		messages: [
			{
				id: "intro-assistant-message",
				role: "assistant",
				parts: [
					{ type: "text", text: introText },
					{
						type: "tool-finish_response",
						toolCallId: "initial-finish-response",
						state: "output-available",
						input: { suggestedQuestions: starterQuestions },
						output: { suggestedQuestions: starterQuestions },
					},
				],
			},
		],
	});

	const { scrollRef } = useAutoScroll({
		autoScroll: true,
		status,
		deps: [messages],
	});
	const isStreaming = status === "streaming";
	const canSend = status === "ready" && !!input.trim();
	const canUseSuggestionChips = hasChatAccess && status === "ready";

	const submitMessage = useCallback(
		async (data: z.infer<typeof InputSchema>) => {
			await sendMessage(
				{ text: data.text },
				{
					body: {
						mode: "recruiter",
						accessToken: accessToken || null,
					},
				},
			);
		},
		[accessToken, sendMessage],
	);

	const sendText = useCallback(
		async (text: string) => {
			if (!hasChatAccess) {
				setInputError(
					"Access denied. Please use the full link, or request a new link to enable chat.",
				);
				return;
			}

			setInput("");
			setInputError(null);

			try {
				await submitMessage({ text });
			} catch {
				setInput(text);
				setInputError("Failed to send message. Please try again.");
			}
		},
		[hasChatAccess, submitMessage],
	);

	useEffect(() => {
		if (hasAutoSubmittedPromptRef.current) return;
		if (!hasChatAccess || !promptParam || status !== "ready") return;

		hasAutoSubmittedPromptRef.current = true;

		const result = InputSchema.safeParse({ text: promptParam });
		if (!result.success) {
			setInputError(result.error.issues[0]?.message ?? "Invalid input.");
			return;
		}

		void sendText(result.data.text);
	}, [hasChatAccess, promptParam, sendText, status]);

	const handleSend = async () => {
		if (!hasChatAccess) return;

		const result = InputSchema.safeParse({ text: input });

		if (!result.success) {
			setInputError(result.error.issues[0]?.message ?? "Invalid input.");
			return;
		}

		await sendText(result.data.text);
	};

	const handleSuggestionClick = async (question: string) => {
		if (!hasChatAccess) return;
		if (status !== "ready") return;

		const result = InputSchema.safeParse({ text: question });
		if (!result.success) return;

		await sendText(result.data.text);
	};

	const handleTellMeMoreClick = async (projectId: string) => {
		if (!hasChatAccess) return;
		if (status !== "ready") return;
		if (!(projectId in CHAT_PROJECTS)) return;

		const prompt = buildProjectTellMeMorePrompt(projectId as ChatProjectId);
		const result = InputSchema.safeParse({ text: prompt });
		if (!result.success) return;

		await sendText(result.data.text);
	};

	return (
		<section id="chat" className="relative mt-16 w-full">
			<ChatGradient />
			<div className="mx-auto w-full max-w-4xl rounded-2xl bg-white/45 p-4 shadow-sm backdrop-blur-xl dark:bg-black/25">
				<div
					ref={scrollRef}
					className="h-[580px] overflow-y-auto rounded-xl p-4 backdrop-blur-md "
				>
					{messages.map((message) => (
						<div key={message.id}>
							{Array.isArray(message.parts)
								? message.parts.map((part: unknown, index: number) => {
										const chatPart = toChatPartLike(part);
										if (chatPart?.type === "text") {
											return (
												<TextMessagePart
													key={`${message.id}-text-${index}`}
													role={message.role}
													text={chatPart.text ?? ""}
													onProjectPrompt={(projectId) => {
														void handleTellMeMoreClick(projectId);
													}}
												/>
											);
										}

										if (chatPart?.type === "reasoning") {
											return (
												<ReasoningMessage
													key={`${message.id}-reasoning-${index}`}
													part={chatPart}
												/>
											);
										}

										if (isSearchKnowledgePart(chatPart)) {
											const searchState = getSearchKnowledgeUiState(
												chatPart,
												isStreaming,
											);
											return (
												<SearchKnowledgeMessage
													key={`${message.id}-search-${index}`}
													text={searchState.text}
													animated={searchState.animated}
												/>
											);
										}

										if (chatPart?.type === "tool-finish_response") {
											return (
												<SuggestedQuestionsMessageBubble
													key={`${message.id}-suggestions-${index}`}
													part={chatPart}
													disabled={!canUseSuggestionChips}
													onQuestionClick={(question) => {
														void handleSuggestionClick(question);
													}}
												/>
											);
										}
										return null;
									})
								: null}
						</div>
					))}
				</div>

				<div className="mt-4 flex flex-col gap-2">
					<div className="relative flex">
						<textarea
							value={input}
							onChange={(e) => {
								setInput(e.target.value);
								if (inputError) setInputError(null);
							}}
							onKeyDown={(e) => {
								if (e.key === "Enter" && !e.shiftKey) {
									e.preventDefault();
									if (hasChatAccess && canSend) {
										void handleSend();
									}
								}
							}}
							placeholder={
								hasChatAccess
									? "Ask about projects, decisions, impact, or role fit..."
									: hasServerApiKey
										? "Access denied. Please use the full link, or request a new link to enable chat."
										: "Server missing OPENROUTER_API_KEY."
							}
							rows={3}
							disabled={!hasChatAccess}
							className="w-full resize-none rounded-xl border border-black/15 bg-white/10 p-3 pb-12 pr-14 text-base text-black backdrop-blur-md outline-none transition [scrollbar-gutter:stable] focus:border-blue-700 focus:ring-2 focus:ring-blue-700/40 dark:border-white/20 dark:bg-white/[0.03] dark:text-white dark:focus:border-cyan-400 dark:focus:ring-cyan-400/45"
						/>
						<button
							type="button"
							onClick={() => {
								if (isStreaming) {
									stop();
									return;
								}
								void handleSend();
							}}
							disabled={(!isStreaming && !canSend) || !hasChatAccess}
							aria-label={isStreaming ? "Stop response" : "Send message"}
							className={`absolute bottom-3 right-1.5 inline-flex h-8 w-8 items-center justify-center rounded-full transition disabled:cursor-not-allowed disabled:opacity-50 ${
								isStreaming
									? "bg-white text-black hover:bg-white/90"
									: "bg-blue-700 text-white enabled:hover:bg-blue-800 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-500"
							}`}
						>
							{isStreaming ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="h-4 w-4"
									aria-hidden="true"
								>
									<rect x="7" y="7" width="10" height="10" rx="1.5" />
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="h-4 w-4"
									aria-hidden="true"
								>
									<path d="M12 19V5" />
									<path d="m5 12 7-7 7 7" />
								</svg>
							)}
						</button>
					</div>
					{(inputError || error?.message) && (
						<p className="text-xs text-red-600 dark:text-red-400">
							{error?.message ?? inputError}
						</p>
					)}
					<p className="text-[11px] text-black/60 dark:text-white/60">
						AI responses might be inaccurate.
					</p>
				</div>
			</div>
		</section>
	);
}

const STREAMING_STATUS = "streaming";

const useAutoScroll = ({
	autoScroll = true,
	deps = [],
	status,
}: {
	autoScroll?: boolean;
	deps?: unknown[];
	status?: string;
}) => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const lockToBottomRef = useRef(true);
	const userDetachedRef = useRef(false);
	const lastScrollTopRef = useRef(0);
	const animationFrameRef = useRef<number | null>(null);

	const scrollToBottom = useCallback(() => {
		const scrollElement = scrollRef.current;
		if (!scrollElement || !autoScroll) return;
		scrollElement.scrollTop = scrollElement.scrollHeight;
	}, [autoScroll]);

	const isNearBottom = useCallback((scrollElement: HTMLDivElement) => {
		const distanceFromBottom =
			scrollElement.scrollHeight -
			scrollElement.scrollTop -
			scrollElement.clientHeight;
		return distanceFromBottom <= 48;
	}, []);

	const isAtBottom = useCallback((scrollElement: HTMLDivElement) => {
		const distanceFromBottom =
			scrollElement.scrollHeight -
			scrollElement.scrollTop -
			scrollElement.clientHeight;
		return distanceFromBottom <= 4;
	}, []);

	const maybeScrollToBottom = useCallback(() => {
		if (!lockToBottomRef.current) return;
		scrollToBottom();
	}, [scrollToBottom]);

	useEffect(() => {
		const handleScroll = () => {
			const scrollElement = scrollRef.current;
			if (!scrollElement || !autoScroll) return;

			const currentTop = scrollElement.scrollTop;
			const delta = currentTop - lastScrollTopRef.current;
			lastScrollTopRef.current = currentTop;

			// Detach only on clear upward scroll movement.
			// Small negative deltas can happen during streaming/layout updates.
			if (delta < -2) {
				userDetachedRef.current = true;
				lockToBottomRef.current = false;
				return;
			}

			// Once detached, only re-attach when user reaches actual bottom.
			if (userDetachedRef.current) {
				if (isAtBottom(scrollElement)) {
					userDetachedRef.current = false;
					lockToBottomRef.current = true;
				}
				return;
			}

			// In normal mode, keep follow lock enabled unless user explicitly detached.
			lockToBottomRef.current = true;
		};

		const handleWheel = (event: WheelEvent) => {
			// User is scrolling upward to read older messages: stop follow mode.
			if (event.deltaY < 0) {
				userDetachedRef.current = true;
				lockToBottomRef.current = false;
			}
		};

		const scrollElement = scrollRef.current;
		if (scrollElement) {
			scrollElement.addEventListener("scroll", handleScroll);
			scrollElement.addEventListener("wheel", handleWheel, { passive: true });
			lastScrollTopRef.current = scrollElement.scrollTop;
			handleScroll();
			return () => {
				scrollElement.removeEventListener("scroll", handleScroll);
				scrollElement.removeEventListener("wheel", handleWheel);
			};
		}
	}, [autoScroll, isAtBottom]);

	useEffect(() => {
		const scrollElement = scrollRef.current;
		if (!scrollElement || !autoScroll) return;

		const observer = new MutationObserver(() => {
			requestAnimationFrame(maybeScrollToBottom);
		});

		observer.observe(scrollElement, {
			childList: true,
			subtree: true,
			characterData: true,
		});

		return () => observer.disconnect();
	}, [autoScroll, maybeScrollToBottom]);

	useEffect(() => {
		const scrollElement = scrollRef.current;
		if (!scrollElement || !autoScroll) return;

		// If a stream starts while we're already near bottom, stay locked.
		if (status === STREAMING_STATUS && isNearBottom(scrollElement)) {
			lockToBottomRef.current = true;
		}

		if (status !== STREAMING_STATUS) {
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
				animationFrameRef.current = null;
			}
			return;
		}

		const tick = () => {
			if (lockToBottomRef.current) {
				scrollToBottom();
			}
			animationFrameRef.current = requestAnimationFrame(tick);
		};

		animationFrameRef.current = requestAnimationFrame(tick);

		return () => {
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
				animationFrameRef.current = null;
			}
		};
	}, [autoScroll, isNearBottom, scrollToBottom, status]);

	useEffect(() => {
		if (!autoScroll) return;
		const frame = requestAnimationFrame(maybeScrollToBottom);
		return () => cancelAnimationFrame(frame);
	}, [autoScroll, maybeScrollToBottom, ...deps]);

	return { scrollRef };
};

const ChatGradient = () => (
	<AnimationOnIntersection
		customAnimation={{
			fromClass: "opacity-50",
			toClass: "opacity-100",
		}}
		className="pointer-events-none absolute inset-0 -z-10 duration-[3s]"
	>
		<div className="noise-filter-radial absolute -right-60 -top-40 h-[840px] w-[1840px] rotate-[5deg] overflow-hidden bg-gradient-to-bl from-cyan-400/80 via-cyan-500/45 to-transparent blur-[18px] z-[-2]" />
		<div className="noise-filter-radial absolute -right-40 top-20 h-[840px] w-[1840px] rotate-[10deg] overflow-hidden bg-gradient-to-bl from-blue-500/70 via-blue-500/35 to-transparent dark:from-emerald-400/70 dark:via-emerald-500/30 blur-[18px] z-[-1]" />
		<div className="noise-filter-radial absolute -right-20 top-0 h-[840px] w-[1840px] rotate-[25deg] overflow-hidden bg-gradient-to-bl from-fuchsia-500/70 via-fuchsia-500/30 to-transparent dark:from-blue-700/70 dark:via-blue-700/30 blur-[20px] z-[-3]" />
	</AnimationOnIntersection>
);

function TextMessagePart({
	role,
	text,
	onProjectPrompt,
}: {
	role: UIMessage["role"];
	text: string;
	onProjectPrompt: (projectId: string) => void;
}) {
	const isAssistant = role === "assistant";

	return (
		<div
			className={`mb-3 flex ${isAssistant ? "justify-start" : "justify-end"}`}
		>
			<div
				className={`max-w-[90%] rounded-2xl px-4 py-3 text-base leading-relaxed md:max-w-[80%] ${
					isAssistant
						? "bg-white text-black dark:bg-white/[0.05] dark:text-white"
						: "bg-cyan-600 text-white"
				}`}
			>
				<MarkdownLikeText text={text} onProjectPrompt={onProjectPrompt} />
			</div>
		</div>
	);
}

function SuggestedQuestionsMessageBubble({
	part,
	questions,
	disabled = false,
	onQuestionClick,
}: {
	part?: ChatPartLike;
	questions?: string[];
	disabled?: boolean;
	onQuestionClick: (question: string) => void;
}) {
	const parsedQuestions = Array.isArray(questions)
		? questions.filter((q) => typeof q === "string" && q.trim().length > 0)
		: (() => {
				const source = part?.output ?? part?.input ?? part?.args;
				const parsed = SuggestedQuestionsSchema.safeParse(source);
				return parsed.success ? parsed.data.suggestedQuestions : [];
			})();

	if (parsedQuestions.length === 0) {
		return null;
	}

	return (
		<div className="mb-3 flex justify-start">
			<div className="flex max-w-[90%] flex-wrap gap-1.5 md:max-w-[80%]">
				{parsedQuestions.map((question) => (
					<button
						key={question}
						type="button"
						disabled={disabled}
						onClick={() => onQuestionClick(question)}
						className="max-w-full rounded-full border border-black/15 px-2.5 py-1 text-left text-xs leading-5 text-black [text-wrap:pretty] transition hover:border-black/35 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/20 dark:text-white dark:hover:border-white/45"
					>
						{question}
					</button>
				))}
			</div>
		</div>
	);
}

function ReasoningMessage({ part }: { part: ChatPartLike }) {
	const text = typeof part?.text === "string" ? part.text.trim() : "";
	if (!text) return null;

	return (
		<div className="mb-3 flex justify-start">
			<p className="px-1 py-0.5 text-xs text-black/60 dark:text-white/60">
				{text}
			</p>
		</div>
	);
}

function SearchKnowledgeMessage({
	text,
	animated = false,
}: {
	text: string;
	animated?: boolean;
}) {
	return (
		<div className="mb-3 flex justify-start">
			<p
				className={`px-1 py-0.5 text-xs text-black/60 dark:text-white/60 ${
					animated ? "animate-pulse" : ""
				}`}
			>
				{text}
			</p>
		</div>
	);
}

function isSearchKnowledgePart(part: ChatPartLike | undefined) {
	return part?.type === "tool-search_knowledge";
}

function getSearchKnowledgeUiState(
	part: ChatPartLike | undefined,
	isStreaming: boolean,
) {
	const state = part?.state;

	if (state === "output-available") {
		return { text: "Searched knowledge base.", animated: false };
	}

	if (state === "output-error") {
		return { text: "Knowledge base search failed.", animated: false };
	}

	if (isStreaming) {
		return { text: "Searching knowledge base...", animated: true };
	}

	return { text: "Knowledge base search interrupted.", animated: false };
}

function toChatPartLike(part: unknown): ChatPartLike | undefined {
	if (!part || typeof part !== "object") return undefined;
	return part as ChatPartLike;
}

const SuggestedQuestionsSchema = z.object({
	suggestedQuestions: z
		.array(
			z.preprocess(
				(value) => (typeof value === "string" ? value.trim() : value),
				z.string().min(1),
			),
		)
		.min(2)
		.max(3),
});

type MarkdownLikeBlock =
	| { type: "heading"; level: 1 | 2 | 3 | 4 | 5 | 6; text: string }
	| { type: "blockquote"; text: string }
	| { type: "codeblock"; language: string | null; text: string }
	| { type: "ul"; items: Array<{ text: string; level: number }> }
	| { type: "ol"; items: Array<{ value: number; text: string; level: number }> }
	| { type: "table"; headers: string[]; rows: string[][] }
	| { type: "separator" }
	| { type: "paragraph"; text: string };

function MarkdownLikeText({
	text,
	onProjectPrompt,
}: {
	text: string;
	onProjectPrompt: (projectId: string) => void;
}) {
	const blocks = parseMarkdownLike(text);
	const blockKeyCounts = new Map<string, number>();

	return (
		<div className="space-y-3 text-[14px] leading-7 tracking-[0.01em]">
			{blocks.map((block) => {
				const baseKey = getMarkdownBlockBaseKey(block);
				const currentCount = (blockKeyCounts.get(baseKey) ?? 0) + 1;
				blockKeyCounts.set(baseKey, currentCount);
				const blockKey = `${baseKey}-${currentCount}`;

				if (block.type === "heading") {
					const headingClass =
						block.level === 1
							? "mt-1 text-[18px] font-semibold leading-7 tracking-tight"
							: block.level === 2
								? "mt-1 text-[16px] font-semibold leading-7 tracking-tight"
								: block.level === 3
									? "mt-1 text-[15px] font-semibold leading-6"
									: block.level === 4
										? "mt-1 text-[14px] font-semibold leading-6"
										: block.level === 5
											? "mt-1 text-[13px] font-semibold leading-6 opacity-95"
											: "mt-1 text-[12px] font-semibold uppercase tracking-[0.04em] opacity-90";

					return (
						<p key={blockKey} className={headingClass}>
							{renderInlineMarkdownLike(block.text, onProjectPrompt)}
						</p>
					);
				}

				if (block.type === "blockquote") {
					return (
						<blockquote
							key={blockKey}
							className="border-l-2 border-black/25 pl-4 text-black/85 dark:border-white/30 dark:text-white/85"
						>
							<MarkdownLikeText
								text={block.text}
								onProjectPrompt={onProjectPrompt}
							/>
						</blockquote>
					);
				}

				if (block.type === "codeblock") {
					return (
						<div key={blockKey} className="space-y-1">
							{block.language ? (
								<p className="text-[11px] font-medium uppercase tracking-[0.05em] text-black/60 dark:text-white/60">
									{block.language}
								</p>
							) : null}
							<pre className="overflow-x-auto rounded-lg border border-black/15 bg-black/[0.04] p-3 text-[12px] leading-6 dark:border-white/15 dark:bg-white/[0.06]">
								<code className="font-mono">{block.text}</code>
							</pre>
						</div>
					);
				}

				if (block.type === "ul") {
					const itemCounts = new Map<string, number>();

					return (
						<ul
							key={blockKey}
							className="list-disc space-y-1.5 pl-6 marker:text-current"
						>
							{block.items.map((item) => {
								const itemBaseKey = `${item.level}:${item.text}`;
								const itemCount = (itemCounts.get(itemBaseKey) ?? 0) + 1;
								itemCounts.set(itemBaseKey, itemCount);
								const itemKey = `ul-item-${itemBaseKey}-${itemCount}`;

								return (
									<li
										key={itemKey}
										className="leading-7"
										style={{ marginInlineStart: `${item.level * 16}px` }}
									>
										{renderInlineMarkdownLike(item.text, onProjectPrompt)}
									</li>
								);
							})}
						</ul>
					);
				}

				if (block.type === "ol") {
					const itemCounts = new Map<string, number>();

					return (
						<ol
							key={blockKey}
							className="list-decimal space-y-1.5 pl-6 marker:text-current"
						>
							{block.items.map((item) => {
								const itemBaseKey = `${item.level}:${item.value}:${item.text}`;
								const itemCount = (itemCounts.get(itemBaseKey) ?? 0) + 1;
								itemCounts.set(itemBaseKey, itemCount);
								const itemKey = `ol-item-${itemBaseKey}-${itemCount}`;

								return (
									<li
										key={itemKey}
										value={item.value}
										className="leading-7"
										style={{ marginInlineStart: `${item.level * 16}px` }}
									>
										{renderInlineMarkdownLike(item.text, onProjectPrompt)}
									</li>
								);
							})}
						</ol>
					);
				}

				if (block.type === "table") {
					const headerCounts = new Map<string, number>();
					const rowCounts = new Map<string, number>();

					return (
						<div
							key={blockKey}
							className="overflow-x-auto rounded-lg border border-black/15 dark:border-white/15"
						>
							<table className="w-full min-w-[360px] border-collapse text-left text-[13px] leading-6">
								<thead>
									<tr className="bg-black/[0.03] dark:bg-white/[0.04]">
										{block.headers.map((header) => {
											const headerCount = (headerCounts.get(header) ?? 0) + 1;
											headerCounts.set(header, headerCount);
											const headerKey = `th-${header}-${headerCount}`;

											return (
												<th
													key={headerKey}
													className="border-b border-black/20 px-3 py-2 font-semibold dark:border-white/20"
												>
													{renderInlineMarkdownLike(header, onProjectPrompt)}
												</th>
											);
										})}
									</tr>
								</thead>
								<tbody>
									{block.rows.map((row) => {
										const rowBase = row.join("|");
										const rowCount = (rowCounts.get(rowBase) ?? 0) + 1;
										rowCounts.set(rowBase, rowCount);
										const rowKey = `tr-${rowBase}-${rowCount}`;
										const cellCounts = new Map<string, number>();

										return (
											<tr key={rowKey} className="align-top">
												{row.map((cell) => {
													const cellCount = (cellCounts.get(cell) ?? 0) + 1;
													cellCounts.set(cell, cellCount);
													const cellKey = `${rowKey}-td-${cell}-${cellCount}`;

													return (
														<td
															key={cellKey}
															className="border-b border-black/10 px-3 py-2 align-top dark:border-white/10"
														>
															{renderInlineMarkdownLike(cell, onProjectPrompt)}
														</td>
													);
												})}
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					);
				}

				if (block.type === "separator") {
					return (
						<hr
							key={blockKey}
							className="my-3 border-0 border-t border-black/20 dark:border-white/20"
						/>
					);
				}

				return (
					<p key={blockKey} className="whitespace-pre-wrap leading-7">
						{renderInlineMarkdownLike(block.text, onProjectPrompt)}
					</p>
				);
			})}
		</div>
	);
}

function getMarkdownBlockBaseKey(block: MarkdownLikeBlock): string {
	if (block.type === "heading") return `heading-${block.level}-${block.text}`;
	if (block.type === "blockquote") return `blockquote-${block.text}`;
	if (block.type === "codeblock")
		return `codeblock-${block.language ?? "plain"}-${block.text}`;
	if (block.type === "ul")
		return `ul-${block.items.map((item) => `${item.level}:${item.text}`).join("|")}`;
	if (block.type === "ol")
		return `ol-${block.items.map((item) => `${item.level}:${item.value}:${item.text}`).join("|")}`;
	if (block.type === "table")
		return `table-${block.headers.join("|")}-${block.rows.map((row) => row.join("|")).join("||")}`;
	if (block.type === "separator") return "separator";
	return `paragraph-${block.text}`;
}

function parseMarkdownLike(rawText: string): MarkdownLikeBlock[] {
	const lines = rawText.split(/\r?\n/);
	const blocks: MarkdownLikeBlock[] = [];
	let index = 0;

	while (index < lines.length) {
		const line = lines[index] ?? "";
		const trimmed = line.trim();

		if (!trimmed) {
			index += 1;
			continue;
		}

		const codeFenceMatch = line.match(/^\s*```(\S*)\s*$/);
		if (codeFenceMatch) {
			const language = codeFenceMatch[1]?.trim() || null;
			const codeLines: string[] = [];
			let codeIndex = index + 1;

			while (codeIndex < lines.length) {
				const candidate = lines[codeIndex] ?? "";
				if (/^\s*```\s*$/.test(candidate)) {
					codeIndex += 1;
					break;
				}
				codeLines.push(candidate);
				codeIndex += 1;
			}

			blocks.push({
				type: "codeblock",
				language,
				text: codeLines.join("\n"),
			});
			index = codeIndex;
			continue;
		}

		const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
		if (headingMatch) {
			const level = headingMatch[1].length as 1 | 2 | 3 | 4 | 5 | 6;
			blocks.push({ type: "heading", level, text: headingMatch[2].trim() });
			index += 1;
			continue;
		}

		if (/^---+$/.test(trimmed)) {
			blocks.push({ type: "separator" });
			index += 1;
			continue;
		}

		const quoteMatch = line.match(/^\s*>\s?(.*)$/);
		if (quoteMatch) {
			const quoteLines: string[] = [];
			let quoteIndex = index;

			while (quoteIndex < lines.length) {
				const candidate = lines[quoteIndex] ?? "";
				const candidateMatch = candidate.match(/^\s*>\s?(.*)$/);
				if (candidateMatch) {
					quoteLines.push(candidateMatch[1]);
					quoteIndex += 1;
					continue;
				}

				if (!candidate.trim()) {
					quoteLines.push("");
					quoteIndex += 1;
					continue;
				}

				if (startsNewBlock(candidate)) break;

				// Markdown "lazy continuation": allow non-prefixed lines to continue the quote.
				quoteLines.push(candidate.trimEnd());
				quoteIndex += 1;
			}

			blocks.push({ type: "blockquote", text: quoteLines.join("\n").trim() });
			index = quoteIndex;
			continue;
		}

		if (looksLikeTableStart(lines, index)) {
			const parsedTable = parseMarkdownLikeTable(lines, index);
			if (parsedTable) {
				blocks.push({
					type: "table",
					headers: parsedTable.headers,
					rows: parsedTable.rows,
				});
				index = parsedTable.nextIndex;
				continue;
			}
		}

		const ulMatch = trimmed.match(/^[-*]\s+(.+)$/);
		if (ulMatch) {
			const items: Array<{ text: string; level: number }> = [];
			let listIndex = index;

			while (listIndex < lines.length) {
				const listLine = lines[listIndex] ?? "";
				const itemMatch = listLine.match(/^(\s*)[-*]\s+(.+)$/);
				if (!itemMatch) break;
				const indentSpaces = itemMatch[1]?.length ?? 0;
				const level = Math.floor(indentSpaces / 2);
				items.push({ text: itemMatch[2].trim(), level });
				listIndex += 1;
			}

			blocks.push({ type: "ul", items });
			index = listIndex;
			continue;
		}

		const olMatch = trimmed.match(/^(\d+)\.\s+(.+)$/);
		if (olMatch) {
			const items: Array<{ value: number; text: string; level: number }> = [];
			let listIndex = index;

			while (listIndex < lines.length) {
				const listLine = lines[listIndex] ?? "";
				const listTrimmed = listLine.trim();

				if (!listTrimmed) {
					const nextNonEmptyLine = lines
						.slice(listIndex + 1)
						.find((candidate) => candidate.trim().length > 0);
					if (!nextNonEmptyLine?.trim().match(/^\d+\.\s+.+$/)) {
						break;
					}
					listIndex += 1;
					continue;
				}

				const itemMatch = listLine.match(/^(\s*)(\d+)\.\s+(.+)$/);
				if (!itemMatch) break;
				const indentSpaces = itemMatch[1]?.length ?? 0;
				const level = Math.floor(indentSpaces / 2);
				items.push({
					value: Number(itemMatch[2]),
					text: itemMatch[3].trim(),
					level,
				});
				listIndex += 1;
			}

			blocks.push({ type: "ol", items });
			index = listIndex;
			continue;
		}

		const paragraphLines: string[] = [];
		let paragraphIndex = index;
		while (paragraphIndex < lines.length) {
			const paragraphLine = lines[paragraphIndex] ?? "";
			const paragraphTrimmed = paragraphLine.trim();

			if (!paragraphTrimmed) break;
			if (
				/^\s*```/.test(paragraphLine) ||
				/^(#{1,6})\s+/.test(paragraphTrimmed) ||
				/^\s*>/.test(paragraphLine) ||
				/^---+$/.test(paragraphTrimmed) ||
				/^[-*]\s+/.test(paragraphTrimmed) ||
				/^\d+\.\s+/.test(paragraphTrimmed) ||
				looksLikeTableStart(lines, paragraphIndex)
			) {
				break;
			}

			paragraphLines.push(paragraphLine);
			paragraphIndex += 1;
		}

		blocks.push({ type: "paragraph", text: paragraphLines.join("\n").trim() });
		index = paragraphIndex;
	}

	return blocks;
}

function looksLikeTableStart(lines: string[], index: number) {
	const headerLine = (lines[index] ?? "").trim();
	const separatorLine = (lines[index + 1] ?? "").trim();
	return (
		headerLine.includes("|") &&
		separatorLine.includes("|") &&
		isMarkdownTableSeparator(separatorLine)
	);
}

function parseMarkdownLikeTable(lines: string[], startIndex: number) {
	const headerLine = lines[startIndex] ?? "";
	const separatorLine = lines[startIndex + 1] ?? "";
	if (!isMarkdownTableSeparator(separatorLine.trim())) {
		return null;
	}

	const headers = splitTableCells(headerLine);
	if (headers.length === 0) return null;

	const rows: string[][] = [];
	let index = startIndex + 2;

	while (index < lines.length) {
		const rowLine = lines[index] ?? "";
		const trimmed = rowLine.trim();
		if (!trimmed || !trimmed.includes("|")) break;
		if (isMarkdownTableSeparator(trimmed)) break;

		const cells = splitTableCells(rowLine);
		if (cells.length === 0) break;

		const normalized = headers.map((_, cellIndex) => cells[cellIndex] ?? "");
		rows.push(normalized);
		index += 1;
	}

	return { headers, rows, nextIndex: index };
}

function splitTableCells(line: string) {
	const trimmed = line.trim();
	if (!trimmed.includes("|")) return [];

	const withoutEdges = trimmed.replace(/^\|/, "").replace(/\|$/, "");
	return withoutEdges.split("|").map((cell) => cell.trim());
}

function isMarkdownTableSeparator(line: string) {
	const cells = splitTableCells(line);
	if (cells.length === 0) return false;
	return cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}

function startsNewBlock(line: string) {
	const trimmed = line.trim();
	return (
		/^\s*```/.test(line) ||
		/^(#{1,6})\s+/.test(trimmed) ||
		/^---+$/.test(trimmed) ||
		/^[-*]\s+/.test(trimmed) ||
		/^\d+\.\s+/.test(trimmed) ||
		looksLikeTableLine(trimmed)
	);
}

function looksLikeTableLine(trimmedLine: string) {
	return trimmedLine.includes("|");
}

function renderInlineMarkdownLike(
	text: string,
	onProjectPrompt: (projectId: string) => void,
) {
	return renderInlineMarkdownNodes(text, onProjectPrompt);
}

function renderInlineMarkdownNodes(
	text: string,
	onProjectPrompt: (projectId: string) => void,
	depth = 0,
) {
	// Prevent pathological recursion on malformed nested content.
	if (depth > 6) return [text];

	const pattern =
		/(\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|\[([a-z0-9-]+)\]|\*\*([\s\S]+?)\*\*|__([\s\S]+?)__|\*([^*\n]+)\*|_([^_\n]+)_|`([^`\n]+)`)/g;
	const elements: Array<string | React.ReactNode> = [];
	let lastIndex = 0;
	let match = pattern.exec(text);

	while (match) {
		if (match.index > lastIndex) {
			elements.push(text.slice(lastIndex, match.index));
		}

		const fullMatch = match[0];
		const linkLabel = match[2];
		const linkHref = match[3];
		const projectId = match[4];
		const boldText = match[5] ?? match[6];
		const italicText = match[7] ?? match[8];
		const codeText = match[9];

		if (linkLabel && linkHref) {
			const isValidUrl = isSafeHttpUrl(linkHref);
			if (isValidUrl) {
				elements.push(
					<a
						key={`link-${match.index}-${linkHref}`}
						href={linkHref}
						target="_blank"
						rel="noreferrer noopener"
						className="font-medium underline decoration-current/60 underline-offset-[3px] transition hover:decoration-current"
					>
						{renderInlineMarkdownNodes(linkLabel, onProjectPrompt, depth + 1)}
					</a>,
				);
			} else {
				elements.push(fullMatch);
			}
		} else if (projectId) {
			const showLabel = !endsWithProjectLabel(text, match.index, projectId);
			elements.push(
				<InlineProjectCitation
					key={`project-${match.index}-${projectId}`}
					projectId={projectId}
					onTellMore={onProjectPrompt}
					showLabel={showLabel}
				/>,
			);
		} else if (boldText) {
			elements.push(
				<strong key={`strong-${match.index}`} className="font-semibold">
					{renderInlineMarkdownNodes(boldText, onProjectPrompt, depth + 1)}
				</strong>,
			);
		} else if (italicText) {
			elements.push(
				<em key={`em-${match.index}`} className="italic opacity-95">
					{renderInlineMarkdownNodes(italicText, onProjectPrompt, depth + 1)}
				</em>,
			);
		} else if (codeText) {
			elements.push(
				<code
					key={`code-${match.index}`}
					className="rounded bg-black/10 px-1 py-0.5 font-mono text-[0.92em] dark:bg-white/15"
				>
					{codeText}
				</code>,
			);
		} else {
			elements.push(fullMatch);
		}

		lastIndex = match.index + fullMatch.length;
		match = pattern.exec(text);
	}

	if (lastIndex < text.length) {
		elements.push(text.slice(lastIndex));
	}

	return elements;
}

function InlineProjectCitation({
	projectId,
	onTellMore,
	showLabel,
}: {
	projectId: string;
	onTellMore: (projectId: string) => void;
	showLabel: boolean;
}) {
	const project = CHAT_PROJECTS[projectId as keyof typeof CHAT_PROJECTS];
	if (!project) {
		return <span>{`[${projectId}]`}</span>;
	}

	return (
		<span className="mx-1 inline-flex items-center gap-1 rounded-md border border-black/10 bg-black/[0.03] py-0.5 align-middle dark:border-white/12 dark:bg-white/[0.04]">
			{showLabel ? (
				<span className="text-[11px] font-medium text-black/80 dark:text-white/80">
					{project.label}
				</span>
			) : null}
			<a
				href={project.appHref}
				target="_blank"
				rel="noreferrer noopener"
				className="inline-flex items-center gap-0.5 rounded border border-black/15 bg-white/70 px-1 py-0.5 text-[10px] leading-none text-black transition hover:border-black/35 dark:border-white/20 dark:bg-white/[0.06] dark:text-white dark:hover:border-white/45"
			>
				App
				<span aria-hidden="true" className="text-[9px]">
					↗
				</span>
			</a>
			<a
				href={project.githubHref}
				target="_blank"
				rel="noreferrer noopener"
				className="inline-flex items-center gap-0.5 rounded border border-black/15 bg-white/70 px-1 py-0.5 text-[10px] leading-none text-black transition hover:border-black/35 dark:border-white/20 dark:bg-white/[0.06] dark:text-white dark:hover:border-white/45"
			>
				GitHub
				<span aria-hidden="true" className="text-[9px]">
					↗
				</span>
			</a>
			<button
				type="button"
				onClick={() => onTellMore(projectId)}
				className="rounded border border-black/15 bg-white/70 px-1 py-0.5 text-[10px] leading-none text-black transition hover:border-black/35 dark:border-white/20 dark:bg-white/[0.06] dark:text-white dark:hover:border-white/45"
			>
				Tell me more
			</button>
		</span>
	);
}

function endsWithProjectLabel(
	fullText: string,
	tokenIndex: number,
	projectId: string,
) {
	const project = CHAT_PROJECTS[projectId as keyof typeof CHAT_PROJECTS];
	if (!project) return false;

	const beforeToken = fullText.slice(0, tokenIndex).trimEnd();
	const escapedLabel = project.label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	return new RegExp(`${escapedLabel}$`, "i").test(beforeToken);
}

function isSafeHttpUrl(value: string) {
	try {
		const url = new URL(value);
		return url.protocol === "http:" || url.protocol === "https:";
	} catch {
		return false;
	}
}
