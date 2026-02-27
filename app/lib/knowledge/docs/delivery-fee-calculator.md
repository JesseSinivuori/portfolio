---
id: project-delivery-fee-calculator
title: Delivery Fee Calculator
category: projects
projectId: delivery-fee-calculator
keywords: delivery fee, vite, react, formula, surcharge, rush hour, calculator
updatedAt: 2026-02-25
---
This project was originally built in 2023.
This is a React + Vite calculator with a configurable delivery-fee formula implemented in `context/StateContext.tsx`.
The fee logic includes cart-value surcharge, base distance fee, incremental distance fees, item-count surcharge, rush-hour multiplier, free-delivery threshold, and max-fee cap.
Inputs are stored as strings and parsed to numbers for validation and calculation; invalid inputs disable calculation and clear output.
Settings (for thresholds and multipliers) are adjustable through a dedicated settings UI and applied to the shared context state.
The app also supports keyboard submission flow (enter-to-calculate) and inline error display in input components.
Code references:
- Delivery fee formula and validation state machine: https://github.com/JesseSinivuori/delivery-fee-calculator/blob/main/src/context/StateContext.tsx
- Main form flow and calculate action wiring: https://github.com/JesseSinivuori/delivery-fee-calculator/blob/main/src/App.tsx
- Runtime tuning UI for fee settings and thresholds: https://github.com/JesseSinivuori/delivery-fee-calculator/blob/main/src/components/Settings.tsx
- Input component with inline validation/error behavior: https://github.com/JesseSinivuori/delivery-fee-calculator/blob/main/src/components/InputField.tsx
