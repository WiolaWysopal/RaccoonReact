import { test, expect } from "@playwright/test";

test("page should display main heading correctly", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page.locator("h1")).toBeVisible();
});
