---
id: project-ad-manager
title: Ad Manager
category: projects
projectId: ad-manager
keywords: crud, campaigns, postgres, kysely, zod, swr, jest, playwright
updatedAt: 2026-02-25
---
This project was originally built in 2023.
The backend uses Next.js route handlers with Kysely + Vercel Postgres (`app/lib/kysely.ts`) for campaign and campaign-metrics tables.
`GET /api/campaigns` supports pagination and joins campaigns with metrics before returning typed/validated results.
`POST /api/campaigns` creates campaign rows and initial metric rows, with rollback logic if metrics insertion fails.
Validation and conversion are centralized through Zod schemas (`app/lib/schema/campaigns.ts`, `campaignMetrics.ts`), including numeric conversions and JSON parsing for fields like `adGroups` and `keywords`.
The UI layer uses SWR for loading campaign tables and supports create/update/status toggle/delete workflows.
Testing includes Jest unit tests (`__tests__/campaigns.test.ts`) and Playwright e2e coverage (`e2e/campaigns.test.ts`).
Code references:
- Paginated campaigns API + metrics join query: https://github.com/JesseSinivuori/ad-manager/blob/main/app/api/campaigns/route.ts
- Campaign-by-id read/update/delete route handlers: https://github.com/JesseSinivuori/ad-manager/blob/main/app/api/campaigns/%5Bid%5D/route.ts
- Core campaign schema validation and type conversion: https://github.com/JesseSinivuori/ad-manager/blob/main/app/lib/schema/campaigns.ts
- Data grid interactions (edit, toggle status, delete): https://github.com/JesseSinivuori/ad-manager/blob/main/app/components/CampaignsGrid.tsx
- Client fetch layer for CRUD operations: https://github.com/JesseSinivuori/ad-manager/blob/main/app/lib/fetch/campaigns.ts
- Unit tests for campaign API/fetch behavior: https://github.com/JesseSinivuori/ad-manager/blob/main/__tests__/campaigns.test.ts
