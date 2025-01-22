import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://santiagomadriz.com/');
  await page.getByRole('button', { name: 'QA Engineer - Konrad Group' }).click();
  await page.getByRole('button', { name: 'RPA Developer - Lanshore' }).click();
  await page.getByRole('button', { name: 'Support Engineer 3 - Tek' }).click();
  await page.getByRole('link', { name: 'About Me' }).click();
  await page.getByText('Expertise About Me Projects').click();
});
