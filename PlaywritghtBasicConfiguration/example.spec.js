const { test, expect } = require("@playwright/test");

test("otwiera stronę Example Domain i sprawdza tytuł", async ({ page }) => {
  await page.goto("https://example.com");
  await expect(page).toHaveTitle("Example Domain");
});
