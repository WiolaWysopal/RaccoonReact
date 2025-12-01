const expressVariable = require("express");
const sessionVariable = require("express-session");
const corsVariable = require("cors");

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
    secret: "supersekret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 15, // 15 min
    },
  }),
);

// Middleware chroniący zasoby
function isAuthenticated(req, res, next) {
  if (req.session.user) {
    return next();
  }
  return res.status(401).json({ error: "Brak autoryzacji" });
}

// Logowanie → tworzy sesję
appVariable.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "secret") {
    req.session.user = username;
    return res.json({ message: "Zalogowano!" });
  }

  return res.status(401).json({ error: "Nieprawidłowe dane" });
});

// Chroniony zasób
appVariable.get("/secret", isAuthenticated, (req, res) => {
  res.json({ message: "Tajna informacja tylko dla zalogowanych!" });
});

// WYLOGOWANIE - poprawne usunięcie sesji
appVariable.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: "Nie udało się wylogować" });
    }
    res.clearCookie("connect.sid");
    res.json({ message: "Wylogowano poprawnie" });
  });
});

appVariable.listen(3001, () => console.log("Server działa na 3001"));
