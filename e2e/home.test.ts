import { test, expect } from "@playwright/test";
import { heroSection, mobileMenuButton } from "./helpers/helpers";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("/", () => {
  test("welcome message shows only once", async ({ page }) => {
    await page.getByText("Welcome!").isVisible();
    await page.reload();
    (await page.getByText("Welcome!").isVisible()) === false;
  });

  test("mobile menu is not initially visible", async ({ page }) => {
    await expect(page.getByTestId("mobile-menu")).not.toBeInViewport();
  });

  test("navbar contact button works", async ({ page, isMobile }) => {
    test.slow();
    if (isMobile) {
      await mobileMenuButton(page).click();
      await page
        .getByTestId("mobile-menu")
        .getByRole("link", { name: "contact" })
        .click();
      await page.waitForURL("/contact");
      expect(page.url()).toContain("/contact");
    } else {
      await page
        .getByRole("navigation")
        .getByRole("link", { name: "contact" })
        .click();
      await page.waitForURL("/contact");
      expect(page.url()).toContain("/contact");
    }
  });

  test("hero text and buttons is visible", async ({ page }) => {
    await heroSection(page).getByText(".jesse").isVisible();
    await heroSection(page).getByText("sinivuori", { exact: true }).isVisible();
    await heroSection(page).getByText("Software Engineer").isVisible();
    await heroSection(page).getByText("I 😍 building things.").isVisible();
    await heroSection(page).getByText("Contact", { exact: true }).isVisible();
    await heroSection(page).getByText("Github", { exact: true }).isVisible();
  });

  test("hero contact button works", async ({ page }) => {
    await heroSection(page).getByText("Contact", { exact: true }).click();
    await page.waitForURL("/contact");
  });

  test("contact button at the bottom of the page works", async ({ page }) => {
    await page
      .locator("div[id=contact-bottom]")
      .getByText("Contact", { exact: true })
      .click();
    await page.waitForURL("/contact");
  });

  test("nav links are rendered", async ({ page, isMobile }) => {
    if (isMobile) {
      await mobileMenuButton(page).click();

      const mobileMenu = page.getByRole("navigation");
      const navLinks = (await mobileMenu.allInnerTexts()).join(",");

      [".", "j", "s", "Home", "Projects", "Contact"].map((link) => {
        expect(navLinks).toContain(link);
      });
    } else {
      const navbar = page.getByRole("navigation");
      const navLinks = (await navbar.allInnerTexts()).join(",");

      [".", "j", "s", "Home", "Projects", "Contact"].map((link) => {
        expect(navLinks).toContain(link);
      });
    }
  });
});
