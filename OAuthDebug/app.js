require("dotenv").config();
const expressVariable = require("express");
const axiosVariable = require("axios");
const sessionVariable = require("express-session");

const appVariable = expressVariable();

// --- KONFIGURACJA Z .env ---
const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const clientURI = process.env.CLIENT_URI;

// --- SESJA (przechowywanie tokenów) ---
appVariable.use(
  sessionVariable({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  }),
);

// ===============================================
// 1) LOGIN – przekierowanie do Google
// ===============================================
appVariable.get("/login", (req, res) => {
  const urlVariable =
    "https://accounts.google.com/o/oauth2/v2/auth?" +
    new URLSearchParams({
      client_id: clientID,
      redirect_uri: clientURI,
      response_type: "code",
      scope: "openid email profile",
      access_type: "offline", // umożliwia otrzymanie refresh_token
      prompt: "consent",
    });

  res.redirect(urlVariable);
});

// ===============================================
// 2) CALLBACK – wymiana "code" → access token
// ===============================================
appVariable.get("/callback", async (req, res) => {
  const codeVariable = req.query.code;

  const tokenResponse = await axiosVariable.post(
    "https://oauth2.googleapis.com/token",
    new URLSearchParams({
      client_id: clientID,
      client_secret: clientSecret,
      code: codeVariable,
      redirect_uri: clientURI,
      grant_type: "authorization_code",
    }),
  );

  // Zapisanie tokenów w sesji
  req.session.access_token = tokenResponse.data.access_token;
  req.session.refresh_token = tokenResponse.data.refresh_token;

  res.redirect("/secure");
});

// ===============================================
// Middleware – chroni zabezpieczony obszar
// ===============================================
function requireAuth(req, res, next) {
  if (!req.session.access_token) {
    return res.redirect("/login");
  }
  next();
}

// ===============================================
// 3) Zabezpieczony obszar (wymaga access token)
// ===============================================
appVariable.get("/secure", requireAuth, (req, res) => {
  res.send(`
    <h1>Zabezpieczony obszar ✔</h1>
    <p>Access token: ${req.session.access_token}</p>
    <a href="/refresh">Odśwież token</a><br><br>
    <a href="/logout">Wyloguj</a>
  `);
});

// ===============================================
// 4) Ręczne odświeżenie tokena (refresh_token)
// ===============================================
appVariable.get("/refresh", async (req, res) => {
  const refreshToken = req.session.refresh_token;

  if (!refreshToken) {
    return res.send("Brak refresh tokena — zaloguj się ponownie.");
  }

  const refreshResponse = await axiosVariable.post(
    "https://oauth2.googleapis.com/token",
    new URLSearchParams({
      client_id: clientID,
      client_secret: clientSecret,
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  );

  // Zapis nowego access tokenta
  req.session.access_token = refreshResponse.data.access_token;

  res.send(`
    <h1>Token został odświeżony 🔄</h1>
    <pre>${JSON.stringify(refreshResponse.data, null, 2)}</pre>
    <a href="/secure">Powrót</a>
  `);
});

// ===============================================
// 5) Automatyczne odświeżanie tokena w tle
// ===============================================
setInterval(
  async () => {
    try {
      const refreshToken = (globalRefresh = null);

      // nie odświeżaj niczego jeśli użytkownik nie jest zalogowany
      if (!refreshToken) return;

      const refreshResponse = await axiosVariable.post(
        "https://oauth2.googleapis.com/token",
        new URLSearchParams({
          client_id: clientID,
          client_secret: clientSecret,
          grant_type: "refresh_token",
          refresh_token: refreshToken,
        }),
      );

      console.log("🔄 Automatyczne odświeżenie tokena");
    } catch (err) {
      console.log("Auto-refresh błąd:", err.message);
    }
  },
  1000 * 60 * 40,
); // co 40 minut

// ===============================================
// 6) Wylogowanie
// ===============================================
appVariable.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.send("<h1>Wylogowano ✔</h1><a href='/login'>Zaloguj ponownie</a>");
  });
});

// ===============================================
// Start serwera
// ===============================================
appVariable.listen(3000, () => console.log("➡ http://localhost:3000/login"));
