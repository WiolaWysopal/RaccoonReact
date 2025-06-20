import { Router, useNavigate } from "@reach/router";
import AddUser from "./AddUser";
import RemoveUser from "./RemoveUser";
import ContentManagement from "./ContentManagement";

const AdminPanel = ({ uri }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Witaj w Admin Panelu</h2>

      <button onClick={() => navigate("/adminpanel/removeuser")}>Usuń</button>
      <button onClick={() => navigate("/adminpanel/adduser")}>
        Dodaj użytkownika
      </button>
      <button onClick={() => navigate("/adminpanel/contentmanagement")}>
        Zarządzaj treścią
      </button>

      <button type="submit" onClick={() => navigate("/")}>
        {" "}
        Wyloguj{" "}
      </button>

      <Router basepath={uri}>
        <AddUser path="adduser" />
        <RemoveUser path="removeuser" />
        <ContentManagement path="contentmanagement" />
      </Router>
    </div>
  );
};

export default AdminPanel;
