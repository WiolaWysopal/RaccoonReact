/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // <-- ważne!
    globals: true, // pozwala na użycie "describe", "it", "expect" bez importu
    setupFiles: "./src/setupTests.js", // opcjonalnie plik startowy
  },
});
