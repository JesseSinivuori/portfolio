---
id: project-ecommerce-restaurant
title: Ecommerce Restaurant
category: projects
projectId: ecommerce-restaurant
keywords: ecommerce, nextjs, stripe, sanity, checkout, cart, localstorage
updatedAt: 2026-02-25
---
This project was originally built in 2023.
Product and banner content is fetched from Sanity (`app/lib/sanityClient.ts`, `app/lib/fetch.ts`) and rendered through Next.js routes.
Checkout is integrated through a server route at `app/api/stripe/route.ts` that creates Stripe Checkout sessions with shipping options and redirect URLs.
The app transforms Sanity image references into CDN URLs before creating Stripe line items.
Client-side cart state is managed in `StateContext` with quantity updates, removal logic, totals, and `localStorage` persistence.
The cart UI calls `/api/stripe` and redirects to Stripe Checkout using the Stripe JS client.
Code references:
- Stripe Checkout session creation and payment params: https://github.com/JesseSinivuori/ecommerce/blob/main/app/api/stripe/route.ts
- Client cart state, totals, and persistence logic: https://github.com/JesseSinivuori/ecommerce/blob/main/app/providers/StateContext.tsx
- Product detail route and content loading path: https://github.com/JesseSinivuori/ecommerce/blob/main/app/product/%5Bslug%5D/page.tsx
- Client helper that calls `/api/stripe` and starts checkout: https://github.com/JesseSinivuori/ecommerce/blob/main/app/lib/stripe.ts
- Sanity client configuration and image URL helpers: https://github.com/JesseSinivuori/ecommerce/blob/main/app/lib/sanityClient.ts
- Product/banner data fetch queries from CMS: https://github.com/JesseSinivuori/ecommerce/blob/main/app/lib/fetch.ts
- Cart UI actions and checkout trigger flow: https://github.com/JesseSinivuori/ecommerce/blob/main/app/components/Cart.tsx
