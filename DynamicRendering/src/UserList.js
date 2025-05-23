import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]); // przechowuje pobranych użytkowników
  const [loading, setLoading] = useState(true); // stan ładowania
  const [error, setError] = useState(null); // stan błędu

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) {
          throw new Error("Data loading error!");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // wywołujemy funkcję
  }, []);

  if (loading) return <p>Users Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>List of Users:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
