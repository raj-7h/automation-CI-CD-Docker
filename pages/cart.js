export default class cart {
  constructor(page) {
    this.page = page;
    // this.itemName = page.locator(".inventory_item_name", {
    //   hasText: "Sauce Labs Bolt T-Shirt",
    // });
    this.cartButton = page.locator("#add-to-cart-sauce-labs-bolt-t-shirt");
  }

  async addToCart() {
    // await this.itemName.click();
    await this.cartButton.click();
  }
}
