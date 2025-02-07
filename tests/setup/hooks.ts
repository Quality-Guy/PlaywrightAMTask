import { Before, After } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";
import { CustomWorld } from "./setup"; // Import your CustomWorld class

let browser: Browser;
let page: Page;

Before(async function (this: CustomWorld) {
  console.log("Launching browser before scenario...");
  browser = await chromium.launch({ headless: false, timeout: 600000 }); // Change to true for headless mode
  page = await browser.newPage();

  this.browser = browser;
  this.page = page;

  // Set baseURL and navigate in browser
  this.baseURL = process.env.BASE_URL || "https://demo.quartexcollections.com/";
  await this.page.goto(this.baseURL);
  console.log(`Navigated to ${this.baseURL}`);
});

After(async function (this: CustomWorld) {
  console.log("Closing browser after scenario...");
  await this.page?.close();
  await this.browser?.close();
  console.log("Browser closed.");
});
