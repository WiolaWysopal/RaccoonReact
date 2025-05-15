import React, { useState } from "react";

function UserGreeting({ username }) {
  const [greeting, setGreeting] = useState(`Hello, ${username}!`);

  const changeGreeting = () => {
    setGreeting(`Nice to see you, ${username}!`);
  };

  return (
    <div>
      <h2>{greeting}</h2>
      <button onClick={changeGreeting}>Change greeting</button>
    </div>
  );
}

export default UserGreeting;
