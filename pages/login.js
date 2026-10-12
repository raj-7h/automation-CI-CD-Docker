import "dotenv/config";

export default class Login {
  constructor(page) {
    this.page = page;
    this.userName = page.locator("#user-name");
    this.password = page.locator("#password");
    this.loginButton = page.locator("#login-button");
  }

  async login() {
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    await this.userName.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}
