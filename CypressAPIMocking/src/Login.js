import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true); // loader pokazuje się natychmiast

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) throw new Error("Błąd logowania");

      const data = await res.json();
      setUser(data.user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // loader znika po zakończeniu fetch
    }
  };

  const handleLogout = () => {
    setUser(null);
    setUsername("");
    setPassword("");
  };

  if (user) {
    return (
      <div>
        <p>Witaj, {user.name}!</p>
        <button onClick={handleLogout}>Wyloguj</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        placeholder="Nazwa użytkownika"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Hasło"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Zaloguj</button>

      {loading && <p role="status">Wysyłanie...</p>}
      {error && <p role="alert">{error}</p>}
    </form>
  );
}
