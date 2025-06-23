import React, { useContext } from "react";
import { themeContext } from "./ThemeContext";
import { authContext } from "./AuthContext";

export default function Dashboard() {
  const { darkMode, toggleTheme } = useContext(themeContext);
  const { user, logout } = useContext(authContext);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <h1>{darkMode ? "Dark Theme" : "Light Theme"}</h1>
      {user ? (
        <>
          <p>Witaj, {user.name}!</p>
          <button onClick={logout}>Wyloguj się</button>
        </>
      ) : (
        <p>Użytkownik niezalogowany</p>
      )}

      <button onClick={toggleTheme}>
        Przełącz na {darkMode ? "jasny" : "ciemny"} motyw
      </button>
    </div>
  );
}
