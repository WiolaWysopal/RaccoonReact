import React from "react";
import useLocalStorage from "./useLocalStorage";

const UsernameForm = () => {
  const [username, setUsername] = useLocalStorage("username", "");

  return (
    <div>
      <h2>Hello, {username || "guest"}!</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Type your name..."
      />
    </div>
  );
};

export default UsernameForm;
