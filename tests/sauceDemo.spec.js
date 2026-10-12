import { test, expect } from "playwright/test";
import Login from "../pages/login";
import cart from "../pages/cart";
import checkout from "../pages/checkout";
test("Test on SauceDemo", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  //Login
  const loginPage = new Login(page);
  await loginPage.login();

  //Add to cart
  const Scart = new cart(page);
  await Scart.addToCart();

  // CheckOut
  const checkCart = new checkout(page);
  checkCart.checkOut();

  console.log("just to check workflow");

  await expect(
    page.locator(".complete-header", { hasText: "Thank you for your order!" }),
  ).toBeVisible();
});
