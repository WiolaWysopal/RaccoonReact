import React, { useState, useContext } from "react";
import { authContext } from "./AuthContext";

export default function LoginComponent() {
  const { login } = useContext(authContext);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      login(name.trim());
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Twoje imię"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Zaloguj się</button>
    </form>
  );
}
