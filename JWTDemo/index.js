// index.js
const jwtVariable = require("jsonwebtoken");

// Sekretny klucz do podpisu tokena
const secretVariable = "mojSekretnyKlucz";

// Dane użytkownika (payload)
const payloadVariable = { username: "Anna" };

// Generowanie tokena JWT (ważny 1 godzinę)
const tokenVariable = jwtVariable.sign(payloadVariable, secretVariable, {
  expiresIn: "1h",
});
console.log("Wygenerowany token:");
console.log(tokenVariable);

// Weryfikacja tokena
try {
  const decodedVariable = jwtVariable.verify(tokenVariable, secretVariable);
  console.log("Token jest poprawny. Zawartość payload:");
  console.log(decodedVariable);
} catch (errVariable) {
  console.log("Token niepoprawny lub wygasł");
}
