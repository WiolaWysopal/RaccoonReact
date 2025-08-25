import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (username) {
      setMessage(`Welcome ${username}!`);
    } else {
      setMessage("Please enter a username.");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        name="username"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button id="login-btn" onClick={handleLogin}>
        Login
      </button>
      <p>{message}</p>
    </div>
  );
}
