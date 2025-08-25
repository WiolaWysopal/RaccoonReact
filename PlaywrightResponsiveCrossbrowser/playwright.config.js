import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  projects: [
    // Desktop Chrome
    {
      name: "chromium-desktop",
      use: { browserName: "chromium", viewport: { width: 1280, height: 720 } },
    },
    // Desktop Firefox
    {
      name: "firefox-desktop",
      use: { browserName: "firefox", viewport: { width: 1280, height: 720 } },
    },
    // Mobile Safari (iPhone 12)
    {
      name: "webkit-mobile",
      use: { ...devices["iPhone 12"] }, // Safari na iPhone
    },
  ],
});
