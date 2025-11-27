// backend/server.js
const expressVariable = require("express");
const sessionVariable = require("express-session");
const corsVariable = require("cors");
const cryptoVariable = require("crypto");

const appVariable = expressVariable();
appVariable.use(expressVariable.json());

appVariable.use(
  corsVariable({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

appVariable.use(
  sessionVariable({
    name: "sid", // nazwa ciasteczka
    secret: "super-secret-key-change-me", // w prod z env
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false, // true w produkcji (HTTPS)
      sameSite: "lax", // 'strict' lub 'lax' zależnie od potrzeb
      maxAge: 1000 * 60 * 60, // 1 godzina TTL
    },
  }),
);

const userVariable = { username: "admin", password: "1234" };

const timeoutVariable = 15 * 60 * 1000; // 15 minut bezczynności -> wyloguj
const maxSession = 6 * 60 * 60 * 1000; // maksymalny czas życia sesji 6h

function makeFingerprint(req) {
  const uaVariable = req.headers["user-agent"] || "";
  const ipVariable = req.ip || req.connection?.remoteAddress || "";
  const hashVariable = cryptoVariable
    .createHash("sha256")
    .update(ipVariable + "|" + uaVariable)
    .digest("hex");
  return hashVariable;
}

function validateSession(req, res, next) {
  // jeśli brak sesji użytkownika -> nieautoryzowany
  if (!req.session.user)
    return res.status(401).json({ error: "Brak sesji. Zaloguj się." });

  // sprawdź maksymalny wiek sesji
  const createdAt = req.session.createdAt || 0;
  if (Date.now() - createdAt > maxSession) {
    // niszczymy sesję
    req.session.destroy(() => {
      /* noop */
    });
    return res
      .status(401)
      .json({ error: "Sesja wygasła (max age). Zaloguj się ponownie." });
  }

  // sprawdź idle time (ostatnia aktywność)
  const lastActivity = req.session.lastActivity || createdAt;
  if (Date.now() - lastActivity > timeoutVariable) {
    req.session.destroy(() => {
      /* noop */
    });
    return res
      .status(401)
      .json({
        error: "Sesja wygasła z powodu bezczynności. Zaloguj się ponownie.",
      });
  }

  // sprawdź fingerprint (IP/user-agent) - prosty mechanizm ochrony przed hijack
  const fpVariable = makeFingerprint(req);
  if (req.session.fingerprint !== fpVariable) {
    // podejrzana zmiana środowiska klienta
    req.session.destroy(() => {
      /* noop */
    });
    return res
      .status(401)
      .json({ error: "Niezgodność środowiska sesji. Zaloguj się ponownie." });
  }

  // zaktualizuj ostatnią aktywność (sliding expiration)
  req.session.lastActivity = Date.now();

  // kontynuuj
  next();
}

appVariable.post("/login", (req, res) => {
  const { username, password } = req.body || {};
  if (
    username === userVariable.username &&
    password === userVariable.password
  ) {
    // regeneracja sesji
    req.session.regenerate((err) => {
      if (err) {
        console.error("Błąd regeneracji sesji:", err);
        return res.status(500).json({ error: "Błąd serwera" });
      }
      // ustawiamy dane sesji
      req.session.user = username;
      req.session.createdAt = Date.now();
      req.session.lastActivity = Date.now();
      req.session.fingerprint = makeFingerprint(req);

      // (opcjonalnie) loguj zdarzenie
      console.log(`User ${username} zalogowany, sessionID=${req.sessionID}`);

      return res.json({ message: "Zalogowano poprawnie" });
    });
  } else {
    return res.status(401).json({ error: "Niepoprawne dane logowania" });
  }
});

appVariable.get("/public", (req, res) => {
  res.json({ message: "Dane publiczne" });
});

appVariable.get("/secret", validateSession, (req, res) => {
  res.json({ message: `Dane tajne - witaj ${req.session.user}` });
});

appVariable.post("/logout", (req, res) => {
  const userInSession = req.session?.user;
  req.session.destroy((err) => {
    if (err) {
      console.error("Błąd niszczenia sesji:", err);
      return res.status(500).json({ error: "Błąd wylogowania" });
    }
    // dodatkowo ustawimy puste cookie (opcjonalne)
    res.clearCookie("sid"); // nazwa jak w ustawieniach session.name
    console.log(`User ${userInSession} wylogowany`);
    return res.json({ message: "Wylogowano" });
  });
});

appVariable.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

const portVariable = 3001;
appVariable.listen(portVariable, () => {
  console.log(`Server działa na http://localhost:${portVariable}`);
});
