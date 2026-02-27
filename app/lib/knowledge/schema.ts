import { z } from "zod";
import { CHAT_PROJECT_IDS } from "@/app/lib/chat-projects";

export const KnowledgeCategorySchema = z.enum([
	"core_profile",
	"projects",
	"architecture",
	"impact_metrics",
	"process",
	"faq",
]);

export const KnowledgeDocumentSchema = z.object({
	id: z.string().min(1).max(120),
	title: z.string().min(1).max(160),
	category: KnowledgeCategorySchema,
	projectId: z.enum(CHAT_PROJECT_IDS).nullable(),
	keywords: z.array(z.string().min(1).max(40)).min(1).max(48),
	updatedAt: z.string().min(10).max(10),
	content: z.string().min(1).max(4000),
});

export const SearchKnowledgeInputSchema = z.object({
	query: z
		.string()
		.min(1)
		.max(300)
		.describe(
			"Natural-language search query for the knowledge base. Use concrete, high-signal terms (project/domain, ownership, impact, architecture/tech) rather than vague wording. Example: 'ad manager campaign metrics ownership impact postgres kysely api validation'.",
		),
	category: KnowledgeCategorySchema.nullable().describe(
		"Optional category preference. Keep null unless user explicitly asks for a category.",
	),
	projectId: z
		.enum(CHAT_PROJECT_IDS)
		.nullable()
		.describe(
			"Optional project filter. Keep null by default; only set when user clearly asks about one project.",
		),
	limit: z
		.number()
		.int()
		.min(1)
		.max(8)
		.describe("Maximum number of results to return (1-8)."),
});

export const SearchKnowledgeResultSchema = z.object({
	id: z.string().min(1).max(120),
	title: z.string().min(1).max(160),
	category: KnowledgeCategorySchema,
	projectId: z.enum(CHAT_PROJECT_IDS).nullable(),
	score: z.number().min(0).max(10000),
	excerpt: z.string().min(1).max(360),
	references: z
		.array(
			z.object({
				label: z.string().min(1).max(180),
				href: z.string().url().max(500),
			}),
		)
		.min(0)
		.max(8),
});

export type KnowledgeDocument = z.infer<typeof KnowledgeDocumentSchema>;
export type SearchKnowledgeInput = z.infer<typeof SearchKnowledgeInputSchema>;
