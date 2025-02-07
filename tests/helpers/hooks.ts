import { Before, After } from "@cucumber/cucumber";
import { CustomWorld } from "./setup";

Before(async function (this: CustomWorld) {
    console.log("Initialising World");
  await this.init(); // Start Playwright before each scenario
  console.log("World initialised!");
});

After(async function (this: CustomWorld) {
    console.log("Closing browser");
  await this.close(); // Close Playwright after each scenario
  console.log("Browser")
});