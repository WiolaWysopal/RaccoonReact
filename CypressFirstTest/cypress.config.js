import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    supportFile: false,
    baseUrl: "https://example.cypress.io",
    // specPattern domyślnie jest: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"
    // skoro Twój plik nazywa się home.spec.js, możemy dostosować:
    specPattern: "cypress/e2e/**/*.spec.js",
  },
});
