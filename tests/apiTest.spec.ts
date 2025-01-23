import { test, expect } from '@playwright/test';

test('Mock API response', async ({ page }) => {
  // Intercept the API request and provide a mock response
  await page.route('https://api.example.com/data', async (route) => {
    const mockData = { id: 1, name: 'Mock User' };
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(mockData),
    });
  });

  // Navigate to the page that calls the API
  await page.goto('https://example.com/api-test');

  // Verify the mocked data is displayed on the page
  const userName = await page.locator('#user-name').textContent();
  expect(userName).toBe('Mock User');
});