import { useContext } from "react";
import UserContext from "./UserContext";

const Account = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <div>
          <h2> Hello, {user.username}</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please log in to view your account </p>
      )}
    </div>
  );
};

export default Account;
