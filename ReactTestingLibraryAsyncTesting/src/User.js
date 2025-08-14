import React, { useEffect, useState } from "react";

function User() {
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) return <p> Loading... </p>;
  return <h1> {user.name} </h1>;
}

export default User;
