import { test, expect } from "@playwright/test";

test("user can fill form, click button and see welcome message", async ({
  page,
}) => {
  // 1. Wejdź na stronę
  await page.goto("http://localhost:3000"); // zakładam że app działa na porcie 3000

  // 2. Wpisz nazwę użytkownika
  await page.fill('input[name="username"]', "Alice");

  // 3. Kliknij przycisk
  await page.click("#login-btn");

  // 4. Sprawdź rezultat
  await expect(page.locator("p")).toHaveText("Welcome Alice!");
});
