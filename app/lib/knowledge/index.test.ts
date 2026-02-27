import { describe, expect, it } from "vitest";
import { searchKnowledge } from "./index";

describe.skip("searchKnowledge", () => {
	it("returns relevant project results for targeted query", () => {
		const result = searchKnowledge({
			query: "convex multiplayer room turns",
			category: null,
			projectId: null,
			limit: 3,
		});

		expect(result.results.length).toBeGreaterThan(0);
		expect(result.results[0]?.projectId).toBe("tic-tac-toe");
	});

	it("respects projectId filter", () => {
		const result = searchKnowledge({
			query: "api schema campaigns validation",
			category: null,
			projectId: "ad-manager",
			limit: 3,
		});

		expect(result.results.length).toBeGreaterThan(0);
		for (const item of result.results) {
			expect(item.projectId).toBe("ad-manager");
		}
	});

	it("prioritizes requested category", () => {
		const result = searchKnowledge({
			query: "architecture tradeoffs maintainability reliability",
			category: "architecture",
			projectId: null,
			limit: 3,
		});

		expect(result.results.length).toBeGreaterThan(0);
		expect(result.results[0]?.category).toBe("architecture");
		expect(
			result.results.some((item) => item.category === "architecture"),
		).toBe(true);
	});

	it("returns labeled references when present in source docs", () => {
		const result = searchKnowledge({
			query: "stripe checkout route",
			category: "projects",
			projectId: "ecommerce-restaurant",
			limit: 3,
		});

		const first = result.results[0];
		expect(first).toBeDefined();
		expect(first.references.length).toBeGreaterThan(0);
		expect(first.references[0]?.label.length).toBeGreaterThan(0);
		expect(first.references[0]?.href).toMatch(
			/^https:\/\/github\.com\/JesseSinivuori\//,
		);
	});

	it("enforces result limit", () => {
		const result = searchKnowledge({
			query: "react nextjs project",
			category: "projects",
			projectId: null,
			limit: 2,
		});

		expect(result.results.length).toBeLessThanOrEqual(2);
	});

	it("matches uppercase acronym queries", () => {
		const result = searchKnowledge({
			query: "LLM INTEGRATIONS",
			category: null,
			projectId: null,
			limit: 5,
		});

		expect(result.results.length).toBeGreaterThan(0);
	});

	it("matches hyphenated keywords with spaced query terms", () => {
		const result = searchKnowledge({
			query: "multi tenant saas",
			category: "process",
			projectId: null,
			limit: 5,
		});

		expect(result.results.length).toBeGreaterThan(0);
		expect(
			result.results.some((item) => item.id === "current-job-experience"),
		).toBe(true);
	});

	it("normalizes separator characters in queries", () => {
		const variants = [
			"multi-tenant SaaS",
			"multi/tenant SaaS",
			"multi—tenant SaaS",
		];

		for (const query of variants) {
			const result = searchKnowledge({
				query,
				category: "process",
				projectId: null,
				limit: 5,
			});

			expect(
				result.results.some((item) => item.id === "current-job-experience"),
			).toBe(true);
		}
	});

	it("rejects invalid input", () => {
		expect(() =>
			searchKnowledge({
				query: "",
				category: null,
				projectId: null,
				limit: 3,
			}),
		).toThrow();
	});
});
