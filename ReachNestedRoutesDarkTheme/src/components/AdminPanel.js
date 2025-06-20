import { Router, useNavigate } from "@reach/router";
import AddUser from "./AddUser";
import RemoveUser from "./RemoveUser";
import ContentManagement from "./ContentManagement";
import ThemeToggle from "./ThemeToggle";

const AdminPanel = ({ uri }) => {
  const navigate = useNavigate();

  return (
    <div className="login-wrapper">
      <nav>
        <ThemeToggle />
      </nav>

      <div className="components-wrapper">
        <div className="admin-panel-content">
          <h2>Witaj w Admin Panelu</h2>

          <div>
            <button onClick={() => navigate("/adminpanel/removeuser")}>
              Usuń
            </button>
            <button onClick={() => navigate("/adminpanel/adduser")}>
              Dodaj użytkownika
            </button>
            <button onClick={() => navigate("/adminpanel/contentmanagement")}>
              Zarządzaj treścią
            </button>
            <button type="submit" onClick={() => navigate("/")}>
              Wyloguj
            </button>
          </div>

          {/* Komponenty będą renderowane pod przyciskami */}
          <Router basepath={uri}>
            <AddUser path="adduser" />
            <RemoveUser path="removeuser" />
            <ContentManagement path="contentmanagement" />
          </Router>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
