import React, { useState } from "react";
import useSWR, { mutate } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Form = () => {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher,
    {
      refreshInterval: 30000, // refreshing after 30secs
    },
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      name,
      email,
    };

    mutate(
      "https://jsonplaceholder.typicode.com/users",
      [...data, newUser],
      false,
    );

    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    // Refreshing data from server
    mutate("https://jsonplaceholder.typicode.com/users");

    // Clean form
    setName("");
    setEmail("");
  };

  if (isLoading) return <div className="spinner"></div>;
  if (error) return <p style={{ color: "red" }}> Error loading users </p>;

  return (
    <>
      <h1> Users </h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit"> Add User </button>
      </form>

      <ul style={{ listStyleType: "none" }}>
        {data.map((user) => (
          <li key={user.id}>
            {" "}
            {user.name} ({user.email}){" "}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Form;
