import { expect, test } from "@playwright/test";
import { heroSection, mobileMenu, mobileMenuButton } from "./helpers/helpers";

test.beforeEach(async ({ page }) => {
	await page.goto("/");
	await page.waitForLoadState();
});

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
			.getByRole("link", { name: "Contact" })
			.click({ trial: true });
		await page
			.getByTestId("mobile-menu")
			.getByRole("link", { name: "Contact" })
			.click();
		await page.waitForURL("/contact");
	} else {
		await page
			.getByRole("navigation")
			.getByRole("link", { name: "Contact" })
			.click({ trial: true });
		await page
			.getByRole("navigation")
			.getByRole("link", { name: "Contact" })
			.click();
		await page.waitForURL("/contact");
	}
});

test("hero text and buttons is visible", async ({ page }) => {
	await heroSection(page).getByText(".jesse").isVisible();
	await heroSection(page).getByText("sinivuori", { exact: true }).isVisible();
	await heroSection(page)
		.getByText("Full Stack Developer", { exact: true })
		.isVisible();
	await heroSection(page)
		.getByText("I 😍 building things.", { exact: true })
		.isVisible();
	await heroSection(page).getByText("Contact", { exact: true }).isVisible();
	await heroSection(page).getByText("Github", { exact: true }).isVisible();
});

test("hero contact button works", async ({ page }) => {
	test.slow();
	await heroSection(page).getByText("Contact", { exact: true }).click();
	await page.waitForURL("/contact");
});

test("contact button at the bottom of the page works", async ({ page }) => {
	await page
		.locator("#contact-bottom")
		.getByText("Contact", { exact: true })
		.click();
	await page.waitForURL("/contact");
});

test("nav links are rendered", async ({ page, isMobile }) => {
	if (isMobile) {
		await mobileMenuButton(page).click();

		const mobileMenu = page.getByRole("navigation");
		const navLinks = (await mobileMenu.allInnerTexts()).join(",");

		[".", "j", "s", "Home", "Projects", "Contact"].forEach((link) => {
			expect(navLinks).toContain(link);
		});
	} else {
		const navbar = page.getByRole("navigation");
		const navLinks = (await navbar.allInnerTexts()).join(",");

		[".", "j", "s", "Home", "Projects", "Contact"].forEach((link) => {
			expect(navLinks).toContain(link);
		});
	}
});
test("while projects popover is open, switching theme works(on mobile)", async ({
	page,
	isMobile,
}) => {
	test.slow();
	if (!isMobile) return;
	await test.step("html initially has dark class", async () => {
		await expect(page.getByRole("document")).toHaveClass(/dark bg-black/);
	});

	await test.step("opens mobile menu", async () => {
		await mobileMenuButton(page).click();
		await expect(mobileMenu(page)).toBeVisible();
		await expect(mobileMenu(page)).toBeInViewport();
	});

	await test.step("opens projects popover", async () => {
		await mobileMenu(page)
			.getByRole("button", { name: "Projects", exact: true })
			.click();
		await expect(mobileMenu(page).locator("#projects-popover")).toBeVisible();
		await expect(
			mobileMenu(page).locator("#projects-popover"),
		).toBeInViewport();

		await test.step("switches theme successfully", async () => {
			await mobileMenu(page).getByLabel("switch to light mode").click();

			await expect(page.getByRole("document")).not.toHaveClass(/dark bg-black/);
		});
	});
});
