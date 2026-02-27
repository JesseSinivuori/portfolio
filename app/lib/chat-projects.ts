export const CHAT_PROJECT_IDS = [
	"news-website",
	"tic-tac-toe",
	"ecommerce-restaurant",
	"ad-manager",
	"gradient-generator",
	"delivery-fee-calculator",
	"portfolio-github",
] as const;

export type ChatProjectId = (typeof CHAT_PROJECT_IDS)[number];

export const CHAT_PROJECTS: Record<
	ChatProjectId,
	{ label: string; appHref: string; githubHref: string; note: string }
> = {
	"news-website": {
		label: "News Website",
		appHref: "https://news-site-alpha.vercel.app/landing",
		githubHref: "https://github.com/JesseSinivuori/news",
		note: "Full stack news app with API caching and landing page.",
	},
	"tic-tac-toe": {
		label: "Tic-Tac-Toe",
		appHref: "https://tic-tac-toe-x.vercel.app/",
		githubHref: "https://github.com/JesseSinivuori/tic-tac-toe",
		note: "Real-time multiplayer app with AI and game modes.",
	},
	"ecommerce-restaurant": {
		label: "Ecommerce Restaurant",
		appHref: "https://ecommerce-restaurant-beta.vercel.app/",
		githubHref: "https://github.com/JesseSinivuori/ecommerce",
		note: "Full stack restaurant-themed ecommerce application.",
	},
	"ad-manager": {
		label: "Ad Manager",
		appHref: "https://ad-manager-beta.vercel.app/",
		githubHref: "https://github.com/JesseSinivuori/ad-manager",
		note: "Full stack CRUD app for managing ad campaigns.",
	},
	"gradient-generator": {
		label: "Gradient Generator",
		appHref: "https://gradient-generator-beta.vercel.app/",
		githubHref: "https://github.com/JesseSinivuori/gradient-generator",
		note: "Gradient creation, animation, and testing app.",
	},
	"delivery-fee-calculator": {
		label: "Delivery Fee Calculator",
		appHref: "https://delivery-fee-nu.vercel.app/",
		githubHref: "https://github.com/JesseSinivuori/delivery-fee-calculator",
		note: "Delivery fee calculator with production-style logic.",
	},
	"portfolio-github": {
		label: "Portfolio Source",
		appHref: "https://jesse-sinivuori.vercel.app/",
		githubHref: "https://github.com/JesseSinivuori/portfolio",
		note: "Source code for this portfolio, including this AI chat.",
	},
};
