const expressVariable = require("express");
const basicAuth = require("basic-auth");
const corsVariable = require("cors");

const appVariable = expressVariable();
appVariable.use(
  corsVariable({ origin: "http://localhost:3000", credentials: true }),
);

const usersVariable = { admin: "password123", user: "userpass" };

// Middleware Basic Auth

const authVariable = (req, res, next) => {
  const userVariable = basicAuth(req);
  if (
    !userVariable ||
    !usersVariable[userVariable.name] ||
    usersVariable[userVariable.name] != userVariable.pass
  ) {
    res.set("WWW-Authenticate", 'Basic realm="Simple API"');
    return res.status(401).send("Authentication required.");
  }
  next();
};

// endpoint chroniony Basic Auth
appVariable.get("/secret", authVariable, (req, res) => {
  res.json({
    message: `Witaj, ${basicAuth(req).name}! To jest chroniona treść.`,
  });
});

// endpoint publiczny
appVariable.get("/public", (req, res) => {
  res.json({ message: "To jest publiczna treść API" });
});

appVariable.listen(3001, () =>
  console.log("Backend running on http://localhost:3001"),
);
