const express = require("express");
const session = require("express-session");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

// --- SESJE ---
app.use(
  session({
    secret: "super-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false, // ustaw secure: true przy HTTPS
      maxAge: 1000 * 60 * 60,
    },
  }),
);

// "Fake DB"
const USER = {
  username: "admin",
  password: "1234",
};

function isLoggedIn(req, res, next) {
  if (req.session.user) return next();
  return res.status(401).json({ error: "Brak sesji – zaloguj się" });
}

// --- LOGOWANIE ---
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    req.session.user = username;
    return res.json({ message: "Zalogowano poprawnie" });
  }

  res.status(401).json({ error: "Niepoprawne dane logowania" });
});

// --- ENDPOINT PUBLICZNY ---
app.get("/public", (req, res) => {
  res.json({ message: "Dane publiczne" });
});

// --- ENDPOINT CHRONIONY ---
app.get("/secret", isLoggedIn, (req, res) => {
  res.json({ message: `Dane tajne, witaj ${req.session.user}` });
});

// --- WYLOGOWANIE ---
app.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.json({ message: "Wylogowano" });
  });
});

app.listen(3001, () => {
  console.log("Backend działa na http://localhost:3001");
});
