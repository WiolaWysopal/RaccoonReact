import React, { useState, useEffect } from "react";
import UserList from "./UserList";
import withLoading from "./withLoading";

const UserListWithLoading = withLoading(UserList);

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Symulacja pobierania danych z serwera
  useEffect(() => {
    setTimeout(() => {
      setUsers(["Anne", "John", "Jane"]);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="p-4">
      <h1>Users List</h1>
      <UserListWithLoading isLoading={isLoading} users={users} />
    </div>
  );
}

export default App;
