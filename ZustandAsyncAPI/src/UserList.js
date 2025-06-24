import React, { useEffect } from "react";
import { useStore } from "./store";

const UserList = () => {
  const { users, loading, error, fetchUsers } = useStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (loading) return <p> Data loading... </p>;
  if (error) return <p> AN ERROR OCCURED: {error}</p>;

  return (
    <div>
      <h2> USERS LIST </h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {" "}
            {user.name} ({user.email}){" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
