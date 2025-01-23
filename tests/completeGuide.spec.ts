import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);

await page.getByRole('button', { name: 'Submit' }).click();

await page.getByText('Welcome to Example').isVisible();

await page.getByLabel('Username').fill('testuser');

await page.getByPlaceholder('Enter your password').fill('password123');

await page.getByAltText('Logo Image').click();

await page.getByTitle('Close Dialog').fill('playwright@microsoft.com');;

await page.getByTestId('submit-button').click();

const USERNAME = 'testuser';

await page.fill('input[name="username"]', USERNAME);
await page.click('text=Test Exceptions');

await page.locator('css=button').click();
await page.locator('xpath=//button').click();

const locator = page.getByRole('button', { name: 'Sign in' });
await locator.hover();
await locator.click();





});

test.only('focus this test', async ({ page }) => {
    // Run only focused tests in the entire project.
  });
  
  test.skip('skip this test', async ({ page }) => {
    // This test is not run
  });  

