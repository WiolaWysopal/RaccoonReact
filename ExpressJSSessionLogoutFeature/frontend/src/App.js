import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const login = async () => {
    const username = prompt("Login:");
    const password = prompt("Hasło:");

    const res = await fetch("http://localhost:3001/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    setMessage(data.message || data.error);
  };

  const getPublic = async () => {
    const res = await fetch("http://localhost:3001/public");
    const data = await res.json();
    setMessage(data.message);
  };

  const getSecret = async () => {
    const res = await fetch("http://localhost:3001/secret", {
      credentials: "include",
    });
    const data = await res.json();
    setMessage(data.message || data.error);
  };

  const logout = async () => {
    const res = await fetch("http://localhost:3001/logout", {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Session Authentication – Demo</h1>

      <button onClick={getPublic}>Publiczne dane</button>
      <button onClick={login}>Zaloguj</button>
      <button onClick={getSecret}>Tajne dane</button>
      <button onClick={logout}>Wyloguj</button>

      <p>{message}</p>
    </div>
  );
}

export default App;
