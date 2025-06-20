import { useContext, useState } from "react";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { login } = useContext(UserContext);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      // np. możesz dodać komunikat lub po prostu przerwać
      alert("Username is required");
      return;
    }

    login({ username });
    navigate("/account");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
