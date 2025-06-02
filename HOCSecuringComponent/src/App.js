import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SecretPage from "./components/SecretPage";
import withAuthorization from "./components/withAuthorization";

const ProtectedSecretPage = withAuthorization(SecretPage, { redirect: true });

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <div>
      <nav>
        <Link to="/">Main Page</Link> | <Link to="/secret">Secret Page</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={<LoginPage setIsAuthorized={setIsAuthorized} />}
        />
        <Route
          path="/secret"
          element={<ProtectedSecretPage isAuthorized={isAuthorized} />}
        />
      </Routes>
    </div>
  );
}

export default App;
