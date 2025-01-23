import { Given, Then } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';
import { chromium } from 'playwright';

let page: Page;

Given('I navigate to {string}', async (url: string) => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto(url);
});

Then('the page title should be {string}', async (expectedTitle: string) => {
  const actualTitle = await page.title();
  expect(actualTitle).toBe(expectedTitle);
  await page.close();
});