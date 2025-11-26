const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); // ← TO DODAJ
app.use(express.json());

// --- KONFIGURACJA DANYCH LOGOWANIA ---
// W prawdziwej aplikacji trzymasz to np. w bazie lub zmiennych środowiskowych.
const VALID_USERNAME = "admin";
const VALID_PASSWORD = "secret";

// --- BASIC AUTH MIDDLEWARE ---
function basicAuth(req, res, next) {
  const authHeader = req.headers["authorization"];

  // Brak nagłówka Authorization → 401
  if (!authHeader) {
    return res.status(401).json({
      error: "Brak nagłówka Authorization",
      message: "Użyj Basic Auth",
    });
  }

  // Oczekiwany format: "Basic base64(username:password)"
  const base64Credentials = authHeader.split(" ")[1];
  let credentials;

  try {
    credentials = Buffer.from(base64Credentials, "base64").toString("utf8");
  } catch (err) {
    return res.status(400).json({
      error: "Niepoprawny format Base64",
    });
  }

  const [username, password] = credentials.split(":");

  // Jeśli brak nazwy użytkownika lub hasła → 400
  if (!username || !password) {
    return res.status(400).json({
      error: "Niepoprawny format danych logowania",
      message: "Wymagane username:password",
    });
  }

  // Walidacja danych logowania
  if (username !== VALID_USERNAME || password !== VALID_PASSWORD) {
    return res.status(401).json({
      error: "Nieprawidłowe dane logowania",
    });
  }

  // Autoryzacja OK → przepuszczamy dalej
  next();
}

// --- PRZYKŁADOWE ENDPOINTY ---
// endpoint publiczny
app.get("/", (req, res) => {
  res.json({ message: "Witaj w API" });
});

// endpoint publiczny (zgodnie z React)
app.get("/public", (req, res) => {
  res.json({ message: "To są publiczne dane" });
});

// endpoint z Basic Auth (zgodnie z React)
app.get("/secret", basicAuth, (req, res) => {
  res.json({ message: "Dane tajne: dostęp przyznany!" });
});

// endpoint chroniony
app.get("/secure", basicAuth, (req, res) => {
  res.json({
    message: "Dostęp przyznany – jesteś zalogowany!",
  });
});

// --- OBSŁUGA BŁĘDÓW SERWERA ---
app.use((err, req, res, next) => {
  console.error("Błąd serwera:", err);
  res.status(500).json({
    error: "Internal Server Error",
  });
});

// --- START SERVERA ---
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server działa na http://localhost:${PORT}`);
});
