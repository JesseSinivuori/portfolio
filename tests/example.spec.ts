import { test, expect } from "@playwright/test";
{
  /**
test("has title", async ({ page }) => {
  await page.goto("http://127.0.0.1:3000");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Jesse's Portfolio/);
});
  */
}

{
  /**
test("contact link", async ({ page }) => {
  await page.goto("http://127.0.0.1:3000");

  // Click the link with text 'Contact'
  await page.getByText("Contact").click();

  // Expects the URL to contain '/portfolio/contact/'
  await expect(page).toHaveURL(/.*\/portfolio\/contact\//);
});
 */
}
{
  /**
test("Cart should be visible //+ have the height of the viewport", async ({
  page,
}) => {
  await page.goto("/store/home/");

  const cartButton = page.getByTestId("cart-button");
  const cartButtonMobile = page.getByTestId("cart-button-mobile");
  const cart = page.getByTestId("cart");

  if (await cartButtonMobile.isVisible()) {
    await cartButtonMobile.click();
  }
  if (await cartButton.isVisible()) {
    await cartButton.click();
  }

  {
    /**
  // Get the height of the cart element
  const cartHeight = await page.evaluate(
    "document.querySelector('#cart').offsetHeight"
  );

  // Get the viewport height
  const viewportHeight = await page.evaluate("window.innerHeight");

  // Check if the cart height is equal to the viewport height
  expect(cartHeight).toEqual(viewportHeight);
*/
  /*
  }
  await expect(cart).toBeVisible();
  
}); 
*/
}

test("cart should not be visible", async ({ page }) => {
  await page.goto("/");

  const cart = page.getByTestId("cart");

  await expect(cart).not.toBeVisible();
});
