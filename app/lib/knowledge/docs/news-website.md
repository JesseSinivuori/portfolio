---
id: project-news-website
title: News Website
category: projects
projectId: news-website
keywords: news, nextjs, newsapi, redis, vercel kv, zod, pagination, search
updatedAt: 2026-02-26
---
This project was originally built in 2023.
This project is built with Next.js App Router and has both a landing page (`/landing`) and the main app flow.
Article queries are validated with Zod schemas (`articles.zod.ts`) including endpoint, category, country, query, and page.
Server-side fetching uses NewsAPI with a fixed page size of 18 items and builds request URLs from normalized search params.
The NewsAPI free tier has a limit of 100 requests per day, and this constraint is handled in the app's error and caching flow.
Caching is implemented with `@vercel/kv` in `articles.redis.ts` with a 24-hour expiration.
The fetch layer returns explicit error states like `API limit reached.` and `Failed to fetch news.`
Code references:
- Fetch + caching orchestration for NewsAPI queries: https://github.com/JesseSinivuori/news/blob/main/app/lib/articles/articles.fetch.ts
- Vercel KV cache read/write with TTL: https://github.com/JesseSinivuori/news/blob/main/app/lib/articles/articles.redis.ts
- URL/search param validation schemas (Zod): https://github.com/JesseSinivuori/news/blob/main/app/lib/articles/articles.zod.ts
- Main dynamic articles route wiring params to fetch: https://github.com/JesseSinivuori/news/blob/main/app/%5B...articles%5D/page.tsx
- Pagination controls for article browsing: https://github.com/JesseSinivuori/news/blob/main/app/components/PaginationButtons.tsx
