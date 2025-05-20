import React, { useEffect, useState } from "react";
import UserList from "./UserList"; // komponent prezentacyjny

function UserListContainer() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Symulacja pobierania danych (np. z API)
  useEffect(() => {
    // Zamiast fetch() używamy statycznych danych
    const mockData = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" },
      { id: 3, name: "Janet Doe" },
    ];

    // symulacja opóźnienia
    setTimeout(() => {
      setUsers(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  return <UserList users={users} loading={loading} />;
}

export default UserListContainer;
