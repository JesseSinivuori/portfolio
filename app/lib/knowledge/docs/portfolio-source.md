---
id: project-portfolio-source
title: Portfolio Source
category: projects
projectId: portfolio-github
keywords: portfolio, nextjs, react, tailwind, playwright, sections, chat, ai sdk, llm, llms, rag, retrieval, context management, pruning, ai chat, streaming, prompt, integration, jwt, token, access token, jose, recruiter links
updatedAt: 2026-02-27
---
The original portfolio showcase project set was first built in 2023 and has been iterated on since.
The portfolio itself is a Next.js + TypeScript project with section-based UI components and route-based API handlers.
It includes Playwright e2e setup (`playwright.config.ts`) and script support for typecheck and test execution.
The current codebase includes an AI chat section and an API route (`app/api/chat/route.ts`) using AI SDK streaming.
The chat implementation uses RAG-style retrieval by searching a local knowledge base before generating grounded responses.
The chat route also implements LLM context management by pruning prior messages/tool calls before inference to keep responses focused and within token budgets.
Chat access is protected by signed JWT access tokens passed via URL query (`accessToken`) and validated server-side before model calls.
Token creation is handled through an admin token generator route (`app/api/admin/token/route.ts`) and UI (`app/admin/tokens/page.tsx`) for sharing recruiter-safe links without exposing provider keys.
Provider credentials remain server-side (`OPENROUTER_API_KEY`), while client links only carry app-level access tokens.
Project cards and navigation expose links to individual project demos and source repositories.
Code references:
- Streaming AI chat route with tool orchestration: https://github.com/JesseSinivuori/portfolio/blob/main/app/api/chat/route.ts
- Chat UI with message rendering and interactions: https://github.com/JesseSinivuori/portfolio/blob/main/app/components/sections/Chat.tsx
- Knowledge loader/search logic used by `search_knowledge`: https://github.com/JesseSinivuori/portfolio/blob/main/app/lib/knowledge/index.ts
- JWT token create/verify helpers: https://github.com/JesseSinivuori/portfolio/blob/main/app/lib/token.ts
- Admin token creation endpoint: https://github.com/JesseSinivuori/portfolio/blob/main/app/api/admin/token/route.ts
- End-to-end baseline test for homepage behavior: https://github.com/JesseSinivuori/portfolio/blob/main/e2e/home.spec.ts
