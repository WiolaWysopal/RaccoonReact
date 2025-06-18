import { Navigate } from "react-router-dom";

const GuardedRoute = ({ auth, children }) => {
  if (!auth) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

export default GuardedRoute;
