import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUser] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setUser(res.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      name: `${firstName} ${lastName}`,
      email: email,
    };

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        newUser,
      );
      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }

    // Cleaning form after data posting
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <div>
      <h2> Users List </h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}> {user.name} </li>
        ))}
      </ul>

      <h3> Add new user </h3>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          placeholder="Surname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit"> Add User </button>
      </form>
    </div>
  );
};

export default UserList;
