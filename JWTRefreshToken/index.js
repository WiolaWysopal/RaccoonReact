const expressVariable = require("express");
const jwtVariable = require("jsonwebtoken");
const corsVariable = require("cors");

const appVariable = expressVariable();
appVariable.use(expressVariable.json());
appVariable.use(corsVariable());

const secretVariable = "mojSekretnyKlucz";
const refreshSecretVariable = "mojRefreshSekretnyKlucz";
let refreshTokensVariable = []; // tablica przechowująca refresh tokeny

// Middleware weryfikujący access token
function verifyTokenMiddleware(reqVariable, resVariable, nextVariable) {
  const authHeaderVariable = reqVariable.headers["authorization"];
  const tokenVariable = authHeaderVariable && authHeaderVariable.split(" ")[1];

  if (!tokenVariable)
    return resVariable.status(401).json({ message: "Brak tokena" });

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

// POST /login – generuje access token i refresh token
appVariable.post("/login", (reqVariable, resVariable) => {
  const { username } = reqVariable.body;
  if (!username)
    return resVariable.status(400).json({ message: "Podaj username" });

  const accessTokenVariable = jwtVariable.sign({ username }, secretVariable, {
    expiresIn: "15m",
  });
  const refreshTokenVariable = jwtVariable.sign(
    { username },
    refreshSecretVariable,
    { expiresIn: "7d" },
  );

  refreshTokensVariable.push(refreshTokenVariable);

  resVariable.json({
    accessToken: accessTokenVariable,
    refreshToken: refreshTokenVariable,
  });
});

// POST /token – odnawia access token przy użyciu refresh tokena
appVariable.post("/token", (reqVariable, resVariable) => {
  const { token } = reqVariable.body;
  if (!token) return resVariable.status(401).json({ message: "Brak tokena" });
  if (!refreshTokensVariable.includes(token))
    return resVariable
      .status(403)
      .json({ message: "Refresh token niepoprawny" });

  try {
    const decodedVariable = jwtVariable.verify(token, refreshSecretVariable);
    const accessTokenVariable = jwtVariable.sign(
      { username: decodedVariable.username },
      secretVariable,
      { expiresIn: "15m" },
    );
    resVariable.json({ accessToken: accessTokenVariable });
  } catch (errVariable) {
    resVariable
      .status(403)
      .json({ message: "Refresh token niepoprawny lub wygasł" });
  }
});

// POST /logout – usuwa refresh token
appVariable.post("/logout", (reqVariable, resVariable) => {
  const { token } = reqVariable.body;
  refreshTokensVariable = refreshTokensVariable.filter((t) => t !== token);
  resVariable.json({ message: "Wylogowano" });
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

appVariable.listen(3000, () => {
  console.log("Serwer działa na http://localhost:3000");
});
