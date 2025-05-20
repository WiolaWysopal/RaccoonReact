import React from "react";

function UserList({ users, loading }) {
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>User List:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
