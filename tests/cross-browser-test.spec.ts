import { expect, test } from '@playwright/test';

test.describe.configure({ mode: 'parallel' });

//Will skip all browsers expect Chrome

test('Chromium-specific test', async ({ browserName, page }) => {
  test.skip(browserName !== 'chromium', 'This test runs only in Chromium');
  await page.goto('https://example.com');
  await expect(page.getByRole('heading')).toHaveText('Example Domain');
});

//Will skip all browsers expect Firefox

test('Firefox-specific test', async ({ browserName, page }) => {
    test.skip(browserName !== 'firefox', 'This test runs only in Firefox');
    await page.goto('https://example.com');
    await expect(page.locator('p', { hasText: 'This domain is for use in illustrative examples in documents.' })).toBeVisible();
});
  //Will skip all browsers expect Webkit

test('Webkit-specific test', async ({ browserName, page }) => {
    test.skip(browserName !== 'webkit', 'This test runs only in Webkit');
    await page.goto('https://example.com');
    await expect(page.getByRole('heading')).toHaveText('Example Domain');
  });

 

