import "./App.css";
import { Router } from "@reach/router";

import AdminPanel from "./components/AdminPanel";
import LoginForm from "./components/LoginForm";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <LoginForm path="/" />
        <AdminPanel path="/adminpanel/*" />
        <PageNotFound default />
      </Router>
    </div>
  );
}

export default App;
