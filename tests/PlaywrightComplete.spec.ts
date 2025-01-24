import { test, expect } from '@playwright/test';

test('Playwright Locators and Interactions Practice', async ({ page }) => {
  // Navigate to a sample page
  await page.goto('https://example.com');

  // ===== LOCATOR TYPES =====

  // 1. By CSS Selector
  const cssLocator = page.locator('div.some-class');
  await cssLocator.click();

  // 2. By Text Content (exact match)
  const textLocator = page.locator('text="Exact Text"');
  await expect(textLocator).toBeVisible();

  // 3. By Partial Text Content
  const partialTextLocator = page.locator('text=Partial');
  await partialTextLocator.click();

  // 4. By Role (with attributes)
  const roleLocator = page.getByRole('button', { name: 'Submit' });
  await roleLocator.click();

  // 5. By Placeholder Attribute
  const placeholderLocator = page.locator('[placeholder="Search"]');
  await placeholderLocator.fill('Playwright');

  // 6. By Data Attributes
  const dataTestIdLocator = page.locator('[data-testid="submit-button"]');
  await dataTestIdLocator.click();

  // 7. By nth-child (CSS nth-child selector)
  const nthChildLocator = page.locator('ul li:nth-child(2)');
  await nthChildLocator.click();

  // 8. By XPath
  const xpathLocator = page.locator('//button[text()="Click Me"]');
  await xpathLocator.click();

  // 9. By Test ID (using Playwright's built-in test ID feature)
  const testIdLocator = page.getByTestId('unique-id');
  await testIdLocator.click();

  // ===== INTERACTIONS =====

  // 1. Typing into Input Fields
  const inputField = page.locator('#username');
  await inputField.type('TestUser');

  // 2. Selecting from Dropdowns
  const dropdown = page.locator('#dropdown');
  await dropdown.selectOption('OptionValue');

  // 3. Checking Checkboxes
  const checkbox = page.locator('input[type="checkbox"]');
  await checkbox.check();

  // 4. Clicking a Button
  const button = page.locator('button#submit');
  await button.click();

  // 5. Hovering Over Elements
  const hoverElement = page.locator('.hover-class');
  await hoverElement.hover();

  // 6. Drag and Drop
  const source = page.locator('#drag-source');
  const target = page.locator('#drop-target');
  await source.dragTo(target);

  // 7. Scrolling to an Element
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

  // ===== ADVANCED INTERACTIONS =====

  // 1. Handling Modals
  page.once('dialog', async (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept();
  });
  await page.locator('#open-dialog').click();

  // 2. File Upload
  const fileUpload = page.locator('input[type="file"]');
  await fileUpload.setInputFiles('path/to/file.txt');

  // 3. Screenshots
  await page.screenshot({ path: 'screenshot.png' });

  // 4. API Requests
  const response = await page.request.post('https://api.example.com/login', {
    data: { username: 'TestUser', password: 'password123' },
  });
  console.log(await response.json());

  // ===== EXTRAS =====

  // Wait for a specific network request
  await page.waitForResponse((response) => response.url().includes('api') && response.status() === 200);

  // Wait for an element to be hidden
  const loader = page.locator('#loader');
  await loader.waitFor({ state: 'hidden' });
});