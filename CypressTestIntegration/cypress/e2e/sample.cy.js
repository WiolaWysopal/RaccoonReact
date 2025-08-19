describe("Przykładowy test", () => {
  it("Otwiera stronę i sprawdza tytuł", () => {
    cy.visit("https://example.com");
    cy.title().should("include", "Example");
  });
});
