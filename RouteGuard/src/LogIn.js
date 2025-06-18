import { Link } from "react-router-dom";

function LogIn({ isAuthenticated, login, logout }) {
  return (
    <div className="login">
      <Link to="/">Link to Home Page</Link>
      <Link to="/protected">Link to Protected Page</Link>
      <Link to="/unprotected">Link to Unprotected Page</Link>

      <button className="loginbutton" onClick={login}>
        Login
      </button>
      <button onClick={logout}>Logout</button>

      <p>Status: {isAuthenticated ? "LoggedIn" : "LoggedOut"}</p>

      {!isAuthenticated && (
        <p style={{ color: "red" }}>
          You have to log in to see protected content.
        </p>
      )}
    </div>
  );
}

export default LogIn;
