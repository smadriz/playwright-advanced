import { test, expect } from '@playwright/test';

test('Playwright Locators and Interactions Practice', async ({ page }) => {
  await page.goto('https://example.com');
  const cssLocator = page.locator('div.some-class');
  await cssLocator.click();
  const textLocator = page.locator('text="Exact Text"');
  await expect(textLocator).toBeVisible();
  const partialTextLocator = page.locator('text=Partial');
  await partialTextLocator.click();
  const roleLocator = page.getByRole('button', { name: 'Submit' });
  await roleLocator.click();
  const placeholderLocator = page.locator('[placeholder="Search"]');
  await placeholderLocator.fill('Playwright');
  const dataTestIdLocator = page.locator('[data-testid="submit-button"]');
  await dataTestIdLocator.fill('Playwright');
  const nthChildLocator = page.locator('ul li:nth-child(2)');
  await nthChildLocator.click();
  const xpathLocator = page.locator('//button[text()="Click Me"]');
  await xpathLocator.click();
  const testIdLocator = page.getByTestId('unique-id');
  await testIdLocator.click();
  // ===== INTERACTIONS =====
  const inputField = page.locator('#username');
  await inputField.type('TestUser');

  const dropdown = page.locator('#dropdown');
  await dropdown.selectOption('OptionValue');

  const checkbox = page.locator('input[type="checkbox"]');
  await checkbox.check();

  const button = page.locator('button#submit');
  await button.click();

  const source = page.locator('#drag-source');
  const target = page.locator('#drop-target');
  await source.dragTo(target);

  const scrollToElement = page.locator('#scroll-target');
  await scrollToElement.scrollIntoViewIfNeeded();

  // ===== ASSERTIONS =====

  // 1. Assert Visibility
  const visibleElement = page.locator('.visible-class');
  await expect(visibleElement).toBeVisible();

  // 2. Assert Text Content
  const textElement = page.locator('#text-element');
  await expect(textElement).toHaveText('Expected Text');

  // 3. Assert Attribute Value
  const attributeElement = page.locator('input#email');
  await expect(attributeElement).toHaveAttribute('placeholder', 'Enter your email');

  // 4. Assert Element Count
  const listItems = page.locator('ul li');
  await expect(listItems).toHaveCount(5);


  // Wait for a specific network request
  await page.waitForResponse((response) => response.url().includes('api') && response.status() === 200);

  // Wait for an element to be hidden
  const loader = page.locator('#loader');
  await loader.waitFor({ state: 'hidden' });
});