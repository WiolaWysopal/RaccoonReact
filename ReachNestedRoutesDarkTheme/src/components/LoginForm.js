import { useNavigate } from "@reach/router";
import ThemeToggle from "./ThemeToggle";

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <div className="login-wrapper">
      <nav>
        <ThemeToggle />
      </nav>

      <form action="">
        <label for="first">Username:</label>
        <input
          type="text"
          id="first"
          name="first"
          placeholder="Enter your Username"
          required
        ></input>

        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your Password"
          required
        ></input>

        <button type="submit" onClick={() => navigate("/adminpanel")}>
          {" "}
          Zaloguj{" "}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
