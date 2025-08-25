import { test, expect } from "@playwright/test";

test("loads data dynamically after sync operation", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.click("#load-btn");
  await page.waitForSelector("#result");

  await expect(page.locator("#result")).toHaveText("Secret data loaded!");
});
