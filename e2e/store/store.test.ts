import { test, expect } from "@playwright/test";
import { describe } from "node:test";

describe("/store/home", () => {
  test("cart is not in viewport", async ({ page }) => {
    await page.goto("/");

    const cart = page.getByTestId("cart");

    await expect(cart).not.toBeInViewport();
  });
});
