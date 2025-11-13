const expressVariable = require("express");
const jwtVariable = require("jsonwebtoken");
const corsVariable = require("cors");

const appVariable = expressVariable();
appVariable.use(expressVariable.json());
appVariable.use(corsVariable());

const secretVariable = "mojSekretnyKlucz";

// Middleware weryfikujący JWT
function verifyTokenMiddleware(reqVariable, resVariable, nextVariable) {
  const authHeaderVariable = reqVariable.headers["authorization"];
  const tokenVariable = authHeaderVariable && authHeaderVariable.split(" ")[1];

  if (!tokenVariable) {
    return resVariable.status(401).json({ message: "Brak tokena" });
  }

  try {
    const decodedVariable = jwtVariable.verify(tokenVariable, secretVariable);
    reqVariable.user = decodedVariable;
    nextVariable();
  } catch (errVariable) {
    return resVariable
      .status(403)
      .json({ message: "Token niepoprawny lub wygasł" });
  }
}

// Endpoint do logowania / generowania tokena
appVariable.post("/login", (reqVariable, resVariable) => {
  const { username } = reqVariable.body;
  if (!username)
    return resVariable.status(400).json({ message: "Podaj username" });

  const tokenVariable = jwtVariable.sign({ username }, secretVariable, {
    expiresIn: "1h",
  });
  resVariable.json({ token: tokenVariable });
});

// Chroniony endpoint
appVariable.get(
  "/secret",
  verifyTokenMiddleware,
  (reqVariable, resVariable) => {
    resVariable.json({
      message: `Cześć ${reqVariable.user.username}, masz dostęp do chronionego zasobu!`,
    });
  },
);

// Uruchomienie serwera
appVariable.listen(3000, () => {
  console.log("Serwer działa na http://localhost:3000");
});
