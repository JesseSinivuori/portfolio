import { Page } from "@playwright/test/types/test";

export const mobileMenuButton = (page: Page) =>
  page.getByLabel("toggle mobile menu");

export const heroSection = (page: Page) => page.locator("#hero");

export const mobileMenu = (page: Page) => page.getByTestId("mobile-menu");
