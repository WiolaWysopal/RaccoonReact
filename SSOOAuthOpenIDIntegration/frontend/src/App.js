import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const fetchProfile = async () => {
    const res = await fetch("http://localhost:3001/profile", {
      credentials: "include",
    });
    if (res.ok) {
      const data = await res.json();
      setUser(data);
    } else {
      setUser(null);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>OAuth2 / OpenID Connect SSO Demo</h1>

      {!user ? (
        <a href="http://localhost:3001/auth/google">
          <button>Zaloguj się przez Google</button>
        </a>
      ) : (
        <>
          <h2>Witaj, {user.displayName}</h2>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <a href="http://localhost:3001/logout">
            <button>Wyloguj</button>
          </a>
        </>
      )}

      <hr />
      <button onClick={fetchProfile}>Pobierz profil użytkownika</button>
    </div>
  );
}

export default App;
