import { useNavigate } from "@reach/router";

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <div>
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
