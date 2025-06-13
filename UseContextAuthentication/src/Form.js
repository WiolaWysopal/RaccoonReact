import { useContext, useState } from "react";
import { UserContext } from "./App";

const Form = () => {
  const { user, isAuthenticated, login, logout } = useContext(UserContext);
  const [nameInput, setNameInput] = useState("");

  const handleLogin = () => {
    if (nameInput.trim()) {
      login(nameInput);
      setNameInput("");
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li>User: {user ? user.name : "Guest"}</li>
          <li>Status: {isAuthenticated ? "Logged In" : "Logged Out"}</li>
        </ul>
      </nav>

      {!isAuthenticated ? (
        <div>
          <input
            type="text"
            placeholder="Enter name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </div>
  );
};

export default Form;
