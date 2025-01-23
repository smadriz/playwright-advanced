import { test, expect } from '@playwright/test';


test('Login test', async ({ page }) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.fill('input[name="username"]', 'student');
    await page.fill('input[name="password"]', 'Password123');
    await page.click('button[id="submit"]');
    await page.getByText('Logged In Successfully').isVisible();
    await page.click('[id="menu-item-20"]');
    await page.click('text=Test Exceptions');
    await page.getByTestId('save_btn').isVisible();

    //await page.click('id=add_btn')



});



