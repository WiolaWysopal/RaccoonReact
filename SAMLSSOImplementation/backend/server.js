const expressVariable = require("express");
const sessionVariable = require("express-session");
const passportVariable = require("passport");
const samlStrategy = require("passport-saml").Strategy;
const corsVariable = require("cors");
const fsVariable = require("fs");

const appVariable = expressVariable();

// Pozwól Reactowi komunikować się z backendem
appVariable.use(
  corsVariable({ origin: "http://localhost:3000", credentials: true }),
);

appVariable.use(
  sessionVariable({ secret: "secret", resave: false, saveUninitialized: true }),
);
appVariable.use(passportVariable.initialize());
appVariable.use(passportVariable.session());

passportVariable.use(
  new samlStrategy(
    {
      path: "/login/callback", // musi odpowiadać ACS URL
      entryPoint: "https://idp.ssocircle.com/sso/SSOPOST/metaAlias/publicidp",
      issuer: "http://localhost:3001/saml/metadata", // <-- dokładnie takie samo jak entityID SP w SSOCircle
      cert: fsVariable.readFileSync("./idp_cert.pem", "utf-8"),
    },
    (profile, done) => done(null, profile),
  ),
);

passportVariable.serializeUser((user, done) => done(null, user));
passportVariable.deserializeUser((user, done) => done(null, user));

// Endpoint rozpoczynający logowanie
appVariable.get("/login", passportVariable.authenticate("saml"));

// Endpoint callback
appVariable.post(
  "/login/callback",
  passportVariable.authenticate("saml", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("http://localhost:3000/profile"); // po zalogowaniu przekierowanie na frontend
  },
);

// Endpoint do pobrania profilu użytkownika
appVariable.get("/profile", (req, res) => {
  if (!req.isAuthenticated()) return res.status(401).send("Not authenticated");
  res.json(req.user);
});

appVariable.listen(3001, () =>
  console.log("Backend running on http://localhost:3001"),
);
