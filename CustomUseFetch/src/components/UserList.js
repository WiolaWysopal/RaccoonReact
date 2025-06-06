import React from "react";
import useFetch from "../hooks/useFetch";

function UserList() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
  );

  if (loading) return <p>Users Loading...</p>;
  if (error) return <p>ERROR: {error}</p>;
  if (!data || data.length === 0) return <p>No data available.</p>;

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
