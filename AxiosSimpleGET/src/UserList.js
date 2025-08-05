import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}> {user.name} </li>
      ))}
    </ul>
  );
};

export default UserList;
