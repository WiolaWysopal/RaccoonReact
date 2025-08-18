describe("Strona testowa", () => {
  it("Ładuje się poprawnie", () => {
    cy.visit("/"); // odwiedza baseUrl
    cy.contains("Kitchen Sink"); // sprawdza, czy strona zawiera tekst
  });
});
