import { CustomWorld } from "../setup/setup";
import { Given, When, Then } from "@cucumber/cucumber";
import { Expect, Page, Browser } from "@playwright/test";

Given ('user is on any page of the Quartex Published Site', async function(this: CustomWorld) {
    const page= this.page;
    await page.goto(this.baseURL);
})

When('user enters {string} in the basic search input box', async function(validSearchTerm) {
    const headerSearchInputField = this.page.locator("#search_input_intro");
    await headerSearchInputField.fill(validSearchTerm);

});


// And Start to type your And step here the search button is clicked
// Then Start to type your Then step here user is navigated to the Browse All page
// And the first page of search results is displayed
// And the assets listed meet the search criteria