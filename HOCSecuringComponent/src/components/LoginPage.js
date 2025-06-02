import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setIsAuthorized }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthorized(true);
    navigate("/secret");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default LoginPage;
