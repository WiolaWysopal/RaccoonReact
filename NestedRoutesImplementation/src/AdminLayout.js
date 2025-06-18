import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <h3>AdminLayout Component</h3>
      <div className="profilpage">
        <Link to="UserManagement"> User Management </Link>
        <Link to="ContentManagement"> Content Management </Link>
        <Outlet />
      </div>
    </div>
  );
};
export default AdminLayout;
