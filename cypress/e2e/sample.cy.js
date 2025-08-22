describe("Sample test", () => {
  it("opens example page", () => {
    cy.visit("https://example.cypress.io/");
    cy.contains("Kitchen Sink");
  });
});
