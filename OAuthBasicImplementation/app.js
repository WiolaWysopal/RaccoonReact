require("dotenv").config();

const expressVariable = require("express");
const axiosVariable = require("axios");
const appVariable = expressVariable();

const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const clientURI = process.env.REDIRECT_URI;

// 1) LOGIN → przekierowanie do Google
appVariable.get("/login", (req, res) => {
  const urlVariable =
    "https://accounts.google.com/o/oauth2/v2/auth?" +
    new URLSearchParams({
      client_id: clientID,
      redirect_uri: clientURI,
      response_type: "code",
      scope: "openid email profile",
      access_type: "offline", // aby dostać refresh token
      prompt: "consent",
    });

  res.redirect(urlVariable);
});

// 2) CALLBACK → wymiana code → access token
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

  res.send(`
        <h1>Access Token:</h1>
        <pre>${JSON.stringify(tokenResponse.data, null, 2)}</pre>
    `);
});

// Uruchom serwer
appVariable.listen(3000, () => console.log("http://localhost:3000/login"));
