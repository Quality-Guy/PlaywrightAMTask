import { setWorldConstructor, World } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";

export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;
  baseURL: string = "https://demo.quartexcollections.com/" //Sets base URL for all tests

  // Initialize Playwright before each scenario
  async init() {
    this.browser = await chromium.launch({ headless: false, timeout: 600000 }); // Change to true for headless mode
    console.log("Browser Launched");
    this.page = (await this.browser.newPage());
    console.log("Page created!")
  }

  // Close Playwright after each scenario
  async close() {
    console.log("Closing browser")
    await this.page?.close();
    await this.browser?.close();
    console.log("Browser closed")
  }
}

setWorldConstructor(CustomWorld);
