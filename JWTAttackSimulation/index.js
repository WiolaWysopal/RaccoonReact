const expressVariable = require("express");
const jwtVariable = require("jsonwebtoken");
const corsVariable = require("cors");
const cryptoVariable = require("crypto");

const appVariable = expressVariable();
appVariable.use(expressVariable.json());
appVariable.use(corsVariable());

// Mocny klucz do access tokena (zabezpieczenie przed brute-force)
const accessTokenSecretVariable = cryptoVariable
  .randomBytes(64)
  .toString("hex");

// Klucz do refresh tokena (może być inny)
const refreshTokenSecretVariable = cryptoVariable
  .randomBytes(64)
  .toString("hex");

// Tymczasowe przechowywanie refresh tokenów
let refreshTokensVariable = [];

// Zestaw zużytych access tokenów (ochrona przed token replay attack)
let usedAccessTokensVariable = new Set();

// Middleware do weryfikacji access tokena + replay protection
function verifyAccessTokenMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  const tokenVariable = authHeader && authHeader.split(" ")[1];

  if (!tokenVariable) {
    return res.status(401).json({ message: "Brak tokena" });
  }

  // Sprawdzenie czy token nie został już użyty
  if (usedAccessTokensVariable.has(tokenVariable)) {
    return res
      .status(403)
      .json({ message: "Token replay – token już był użyty!" });
  }

  try {
    const decoded = jwtVariable.verify(
      tokenVariable,
      accessTokenSecretVariable,
    );

    req.user = decoded;
    usedAccessTokensVariable.add(tokenVariable); // Zapisz jako wykorzystany

    next();
  } catch (err) {
    return res.status(403).json({ message: "Token niepoprawny lub wygasł" });
  }
}

// Endpoint generujący tokeny
appVariable.post("/login", (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ message: "Podaj username" });

  const accessToken = jwtVariable.sign(
    { username, jti: cryptoVariable.randomUUID() },
    accessTokenSecretVariable,
    { expiresIn: "1m" },
  );

  const refreshToken = jwtVariable.sign(
    { username },
    refreshTokenSecretVariable,
    { expiresIn: "10m" },
  );

  refreshTokensVariable.push(refreshToken);

  res.json({ accessToken, refreshToken });
});

// Endpoint do odnowienia access tokena
appVariable.post("/refresh", (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ message: "Brak refresh tokena" });
  }

  if (!refreshTokensVariable.includes(refreshToken)) {
    return res.status(403).json({ message: "Refresh token niepoprawny" });
  }

  try {
    const user = jwtVariable.verify(refreshToken, refreshTokenSecretVariable);

    const newAccessToken = jwtVariable.sign(
      { username: user.username, jti: cryptoVariable.randomUUID() },
      accessTokenSecretVariable,
      { expiresIn: "1m" },
    );

    res.json({ accessToken: newAccessToken });
  } catch (err) {
    return res
      .status(403)
      .json({ message: "Refresh token wygasł lub niepoprawny" });
  }
});

// Chroniony endpoint
appVariable.get("/secret", verifyAccessTokenMiddleware, (req, res) => {
  res.json({
    message: `Cześć ${req.user.username}, masz dostęp do chronionego zasobu!`,
  });
});

/* ==============================
   SYMULACJA ATAKÓW
================================*/

/* ==============================
   SYMULACJA ATAKÓW
================================*/

// 1. Atak: manipulacja payloadem
appVariable.post("/attack-manipulation", (req, res) => {
  const { fakeToken } = req.body;

  try {
    jwtVariable.verify(fakeToken, accessTokenSecretVariable);
    return res.json({
      valid: true,
      message: "Token wygląda na poprawny — ale to niemożliwe",
    });
  } catch {
    return res.json({
      valid: false,
      message: "Podpis niepoprawny — manipulacja wykryta",
    });
  }
});

// 2. Atak: token replay
appVariable.post("/attack-replay", (req, res) => {
  const { token } = req.body;

  if (usedAccessTokensVariable.has(token)) {
    return res.json({
      replay: true,
      message: "Token replay — token już był użyty",
    });
  }
  return res.json({ replay: false, message: "Token jeszcze nie był użyty" });
});

// 3. Atak brute-force
appVariable.get("/attack-bruteforce", (req, res) => {
  const keyLengthBits = accessTokenSecretVariable.length * 4;

  res.json({
    message: "Klucz jest zbyt długi, aby brute-force był możliwy",
    keyLengthBits,
  });
});

appVariable.listen(3000, () => {
  console.log("Serwer działa na http://localhost:3000");
});
