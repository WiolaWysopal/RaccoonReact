// backend/server.js
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const app = express();
require("dotenv").config();
const cors = require("cors");

// Sesja
app.use(
  session({ secret: "secret-key", resave: false, saveUninitialized: true }),
);
app.use(passport.initialize());
app.use(passport.session());

// Serializacja użytkownika
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// Strategia OAuth2 / OpenID Connect (Google)
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    },
  ),
);

app.use(
  cors({
    origin: "http://localhost:3000", // frontend
    credentials: true, // pozwala przesyłać ciasteczka sesji
  }),
);

// Endpoint logowania
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

// Callback po logowaniu
app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("http://localhost:3000"); // przekierowanie do React
  },
);

// Endpoint do pobrania profilu
app.get("/profile", (req, res) => {
  if (!req.user) return res.status(401).json({ error: "Nie zalogowany" });
  res.json(req.user);
});

// Logout
app.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("http://localhost:3000");
  });
});

app.listen(3001, () => console.log("Backend running on http://localhost:3001"));
