import { test, expect } from '@playwright/test';

test('Multi-context: Two users logging in and viewing profiles', async ({ browser }) => {
  // Create separate browser contexts for User 1 and User 2
  const user1Context = await browser.newContext();
  const user2Context = await browser.newContext();

  // Open new pages for each user
  const user1Page = await user1Context.newPage();
  const user2Page = await user2Context.newPage();

  // User 1 logs in and views their profile
  await user1Page.goto('https://demoqa.com/login');
  await user1Page.fill('#userName', 'TestUser1'); // Replace with a valid username
  await user1Page.fill('#password', 'Password1!'); // Replace with a valid password
  await user1Page.click('#login');
  await expect(user1Page.locator('#userName-value')).toHaveText('TestUser1');
  console.log('User 1 logged in successfully and viewed their profile.');

  // User 2 logs in and views their profile
  await user2Page.goto('https://demoqa.com/login');
  /*await user2Page.fill('#userName', 'TestUser2'); // Replace with a valid username
  await user2Page.fill('#password', 'Password2!'); // Replace with a valid password
  await user2Page.click('#login');
  await expect(user2Page.locator('#userName-value')).toHaveText('testUser2');
  console.log('User 2 logged in successfully and viewed their profile.');
*/
  // Close both browser contexts
  await user1Context.close();
  await user2Context.close();
});