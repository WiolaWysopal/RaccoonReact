import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Nieprawidłowe dane logowania");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  if (isLoggedIn) {
    return (
      <div>
        <h1>Witaj, {username}!</h1>
        <button onClick={handleLogout}>Wyloguj</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleLogin}>
      <h1>Logowanie</h1>
      {error && <p role="alert">{error}</p>}
      <input
        placeholder="Nazwa użytkownika"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Hasło"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Zaloguj</button>
    </form>
  );
}
