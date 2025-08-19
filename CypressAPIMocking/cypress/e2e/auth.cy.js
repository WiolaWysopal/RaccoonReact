describe("Proces logowania", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  function fillAndSubmit(username, password) {
    cy.get('input[placeholder="Nazwa użytkownika"]').clear().type(username);
    cy.get('input[placeholder="Hasło"]').clear().type(password);
    cy.contains("button", /Zaloguj/i).click();
  }

  it("Poprawne logowanie", () => {
    cy.intercept("POST", "/api/login", {
      statusCode: 200,
      body: { token: "abc123", user: { name: "admin" } },
    }).as("loginOk");

    fillAndSubmit("admin", "1234");

    cy.wait("@loginOk");
    cy.contains(/Witaj, admin!/i).should("be.visible");
  });

  it("Błędne dane logowania", () => {
    cy.intercept("POST", "/api/login", {
      statusCode: 401,
      body: { message: "Niepoprawne dane" },
    }).as("loginFail");

    fillAndSubmit("bad", "wrong");

    cy.wait("@loginFail");
    cy.get('[role="alert"]').should("contain.text", "Błąd logowania");
  });

  it("Opóźniona odpowiedź – pokazywanie stanu ładowania", () => {
    cy.intercept("POST", "/api/login", (req) => {
      req.reply({
        delayMs: 1200,
        statusCode: 200,
        body: { token: "slow", user: { name: "admin" } },
      });
    }).as("loginSlow");

    fillAndSubmit("admin", "1234");

    // czekamy aż loader pojawi się z timeoutem do 2s
    cy.contains('[role="status"]', "Wysyłanie...", { timeout: 3000 }).should(
      "be.visible",
    );

    cy.wait("@loginSlow");

    cy.get('[role="status"]').should("not.exist");
    cy.contains(/Witaj, admin!/i).should("be.visible");
  });

  it("Wylogowanie", () => {
    cy.intercept("POST", "/api/login", {
      statusCode: 200,
      body: { token: "abc123", user: { name: "admin" } },
    }).as("loginOk");

    fillAndSubmit("admin", "1234");
    cy.wait("@loginOk");

    cy.contains("Wyloguj").click();

    cy.get('input[placeholder="Nazwa użytkownika"]').should("be.visible");
  });
});
