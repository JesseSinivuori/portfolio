import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
	type KnowledgeDocument,
	KnowledgeDocumentSchema,
	type SearchKnowledgeInput,
	SearchKnowledgeInputSchema,
} from "./schema";

const KNOWLEDGE_FILE_NAMES = [
	"core-profile.md",
	"news-website.md",
	"tic-tac-toe.md",
	"ecommerce-restaurant.md",
	"ad-manager.md",
	"gradient-generator.md",
	"delivery-fee-calculator.md",
	"portfolio-source.md",
	"architecture-tradeoffs.md",
	"current-job-experience.md",
] as const;

const DOCS_DIR = join(process.cwd(), "app/lib/knowledge/docs");

function parseFrontmatter(markdown: string): {
	meta: Record<string, string>;
	content: string;
} {
	const match = markdown.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
	if (!match) {
		throw new Error("Invalid markdown file: missing frontmatter.");
	}

	const [, rawMeta, content] = match;
	const meta: Record<string, string> = {};

	for (const line of rawMeta.split("\n")) {
		const trimmed = line.trim();
		if (!trimmed) continue;
		const splitIndex = trimmed.indexOf(":");
		if (splitIndex < 1) continue;
		const key = trimmed.slice(0, splitIndex).trim();
		const value = trimmed.slice(splitIndex + 1).trim();
		meta[key] = value;
	}

	return { meta, content: content.trim() };
}

function parseKeywords(value: string | undefined): string[] {
	if (!value) return [];
	return value
		.split(",")
		.map((item) => item.trim())
		.filter(Boolean);
}

function loadKnowledgeDocuments(): KnowledgeDocument[] {
	return KNOWLEDGE_FILE_NAMES.map((fileName) => {
		const raw = readFileSync(join(DOCS_DIR, fileName), "utf8");
		const parsed = parseFrontmatter(raw);

		return KnowledgeDocumentSchema.parse({
			id: parsed.meta.id,
			title: parsed.meta.title,
			category: parsed.meta.category,
			projectId:
				parsed.meta.projectId && parsed.meta.projectId !== "null"
					? parsed.meta.projectId
					: null,
			keywords: parseKeywords(parsed.meta.keywords),
			updatedAt: parsed.meta.updatedAt,
			content: parsed.content,
		});
	});
}

function tokenize(value: string): string[] {
	return value
		.normalize("NFKC")
		.toLowerCase()
		.split(/[^\p{L}\p{N}]+/gu)
		.map((token) => token.trim())
		.filter((token) => token.length > 1);
}

function buildExcerpt(content: string, tokens: string[]): string {
	if (content.length <= 260) return content;
	const lower = content.toLowerCase();

	for (const token of tokens) {
		const index = lower.indexOf(token);
		if (index >= 0) {
			const start = Math.max(0, index - 90);
			const end = Math.min(content.length, start + 240);
			return content.slice(start, end).trim();
		}
	}

	return content.slice(0, 240).trim();
}

function labelFromHref(href: string): string {
	try {
		const pathParts = new URL(href).pathname.split("/").filter(Boolean);
		const file = pathParts[pathParts.length - 1];
		const parent = pathParts[pathParts.length - 2];
		if (file && parent) return `${parent}/${file}`;
		return file ?? "Code reference";
	} catch {
		return "Code reference";
	}
}

function extractReferences(
	content: string,
): Array<{ label: string; href: string }> {
	const references: Array<{ label: string; href: string }> = [];
	const lines = content.split("\n");

	for (const line of lines) {
		const trimmed = line.trim();
		if (!trimmed.startsWith("-")) continue;

		const hrefMatch = trimmed.match(/https?:\/\/\S+/);
		if (!hrefMatch) continue;

		const href = hrefMatch[0].replace(/[),.;]+$/, "");
		const labelCandidate = trimmed
			.replace(/^-+\s*/, "")
			.replace(hrefMatch[0], "")
			.replace(/[):\-–\s]+$/, "")
			.trim();

		references.push({
			label: labelCandidate || labelFromHref(href),
			href,
		});
	}

	return references.slice(0, 8);
}

function scoreDocument(
	doc: KnowledgeDocument,
	input: SearchKnowledgeInput,
): number {
	let score = 0;
	const queryTokens = tokenize(input.query);
	if (queryTokens.length === 0) return 0;

	const title = doc.title.toLowerCase();
	const keywordTokenSet = new Set(tokenize(doc.keywords.join(" ")));
	const content = doc.content.toLowerCase();

	for (const token of queryTokens) {
		if (title.includes(token)) score += 10;
		if (keywordTokenSet.has(token)) score += 8;
		if (content.includes(token)) score += 2;
	}

	if (input.category && doc.category === input.category) score += 6;
	if (input.projectId && doc.projectId === input.projectId) score += 8;

	return score;
}

export function searchKnowledge(rawInput: SearchKnowledgeInput) {
	const parsedInput = SearchKnowledgeInputSchema.parse(rawInput);
	const input = {
		...parsedInput,
		query: parsedInput.query.trim().toLowerCase(),
	};
	const docs = loadKnowledgeDocuments();
	const queryTokens = tokenize(input.query);

	const ranked = docs
		.filter((doc) =>
			input.projectId ? doc.projectId === input.projectId : true,
		)
		.map((doc) => ({
			doc,
			score: scoreDocument(doc, input),
		}))
		.filter((item) => item.score > 0)
		.sort((a, b) => b.score - a.score)
		.slice(0, input.limit)
		.map((item) => ({
			id: item.doc.id,
			title: item.doc.title,
			category: item.doc.category,
			projectId: item.doc.projectId,
			score: item.score,
			excerpt: buildExcerpt(item.doc.content, queryTokens),
			references: extractReferences(item.doc.content),
		}));

	return { results: ranked };
}

export { SearchKnowledgeInputSchema } from "./schema";
