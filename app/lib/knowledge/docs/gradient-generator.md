---
id: project-gradient-generator
title: Gradient Generator
category: projects
projectId: gradient-generator
keywords: gradient, vite, react, reducer, animation, layers, localstorage, vitest
updatedAt: 2026-02-25
---
This project was originally built in 2023.
This project is a React + Vite app centered on layered gradient editing and animation controls.
State is managed with reducer patterns (`gradientLayersReducer`, `animationSettingsReducer`, `savedLayersReducer`) to support add/remove/update operations for layers and colors.
Saved presets are persisted to `localStorage` (`savedLayersReducer.ts` and `backgroundSettings.ts`) and can be restored into the current editor state.
The output panel supports copying generated gradient code via `copy-to-clipboard`.
The repository includes reducer-focused tests using Vitest (`savedLayersReducer.test.ts`).
Code references:
- Reducer for gradient layer add/remove/update operations: https://github.com/JesseSinivuori/gradient-generator/blob/main/src/components/gradientLayersReducer.ts
- Reducer for animation state per layer: https://github.com/JesseSinivuori/gradient-generator/blob/main/src/components/animationSettingsReducer.ts
- Saved layer persistence and localStorage synchronization: https://github.com/JesseSinivuori/gradient-generator/blob/main/src/components/savedLayersReducer.ts
- Vitest coverage for saved layer reducer behavior: https://github.com/JesseSinivuori/gradient-generator/blob/main/src/components/savedLayersReducer.test.ts
- Output/copy pipeline for generated gradient code: https://github.com/JesseSinivuori/gradient-generator/blob/main/src/components/OutputBar.tsx
