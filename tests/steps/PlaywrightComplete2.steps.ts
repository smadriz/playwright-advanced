import { Given, When, Then, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright'; // Import types from Playwright

let browser: Browser; // Explicitly define the type
let page: Page;       // Explicitly define the type


Given('I navigate to {string}', async (url) => {
  browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto(url);
});

Then('the page title should be {string}', async (expectedTitle) => {
  const actualTitle = await page.title();
  if (actualTitle !== expectedTitle) {
    throw new Error(`Expected title to be "${expectedTitle}" but got "${actualTitle}"`);
  }
});

Then('I should see an element with selector {string}', async (selector) => {
  const element = await page.$(selector);
  if (!element) {
    throw new Error(`Element with selector "${selector}" not found.`);
  }
});

When('I type {string} into the search box with selector {string}', async (text, selector) => {
  await page.fill(selector, text);
});

When('I press the {string} key', async (key) => {
  await page.keyboard.press(key);
});

Then('I should see results containing {string}', async (expectedText: string) => {
  const bodyText = await page.textContent('body');
  
  if (!bodyText) {
    throw new Error('Body text is null or undefined. The selector "body" might not exist on the page.');
  }

  if (!bodyText.includes(expectedText)) {
    throw new Error(`Expected to find "${expectedText}" in the page content, but it was not found.`);
  }
});

After(async () => {
  if (browser) {
    await browser.close();
  }
});