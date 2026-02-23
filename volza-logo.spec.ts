import { test } from '@playwright/test';

test('Just open Volza', async ({ page }) => {
  // This tells Playwright to go to the site and wait for it to load
  await page.goto('https://www.volza.com/');
  
  // This keeps the browser open for 5 seconds so you can see it
  await page.waitForTimeout(5000);
  
  console.log('Website opened successfully!');
});