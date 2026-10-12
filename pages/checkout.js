export default class checkout {
  constructor(page) {
    this.page = page;
    this.cartContainer = page.locator("#shopping_cart_container");
    this.checkoutButton = page.locator("#checkout");
    this.firstName = page.locator("#first-name");
    this.lastName = page.locator("#last-name");
    this.postalCode = page.locator("#postal-code");
    this.continueButton = page.locator("#continue");
    this.finishButton = page.locator("#finish");
  }

  async checkOut() {
    await this.cartContainer.click();
    await this.checkoutButton.click();
    await this.firstName.fill("Raj");
    await this.lastName.fill("jha");
    await this.postalCode.fill("201016");
    await this.continueButton.click();
    await this.finishButton.click();
  }
}
