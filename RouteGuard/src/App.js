import "./App.css";
import Unprotected from "./Uprotected";
import Protected from "./Protected";
import Home from "./Home";
import LogIn from "./LogIn";
import { Routes, Route } from "react-router-dom";
import GuardedRoute from "./GuardedRoute";
import { useState } from "react";

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const login = () => setisAuthenticated(true);
  const logout = () => setisAuthenticated(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={
            <LogIn
              isAuthenticated={isAuthenticated}
              login={login}
              logout={logout}
            />
          }
        />

        <Route
          path="/protected"
          element={
            <GuardedRoute auth={isAuthenticated}>
              <Protected isAuthenticated={isAuthenticated} />
            </GuardedRoute>
          }
        />

        <Route path="/unprotected" element={<Unprotected />} />
      </Routes>
    </div>
  );
}

export default App;
