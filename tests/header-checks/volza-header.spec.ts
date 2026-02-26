import { test, expect } from "@playwright/test";

test("Volza Header Functionality Check", async ({ page }) => {
  // 1. Land on Volza
  await page.goto("https://www.volza.com");
  await expect(page).toHaveTitle(/Volza/);

  // 2. Logo Check (Redirects to Home)
  const logo = page.getByRole("link", { name: /volza/i }).first();
  await logo.click();
  await expect(page).toHaveURL("https://www.volza.com/");

  // 3. Language Dropdown (Search Logic)
  await page.getByText("Select Language").click();
  const langSearch = page.getByPlaceholder(/Search Language/i);
  await expect(langSearch).toBeVisible();
  await langSearch.fill("English");

  // 4. Book A Live Demo (Orange Button Redirect)
  const demoBtn = page.getByRole("link", { name: /Book A Live Demo/i });
  await demoBtn.click();
  await expect(page).toHaveURL(/booking-wizard-step-1/);

  // 5. Countries Link (Black Text Redirect)
   // We go back to home first since we redirected away
   await page.goto("https://www.volza.com");
   const countriesLink = page.getByRole("link", { name: "Countries", exact: true });
   await countriesLink.click();
   await expect(page).toHaveURL(/global-trade-data/);

   // 6. Pricing Link Check
   // We use the 'nav' locator to ensure we only target the header link
   const pricingLink = page.locator('nav').getByRole('link', { name: /Pricing/i });
   await pricingLink.click();
   await expect(page).toHaveURL(/pricing/i);
});