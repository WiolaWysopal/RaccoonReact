import React, { useState } from "react";

const ToggleMessage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggle = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isLoggedIn ? "Log out" : "Log in"}
      </button>

      <p>
        {isLoggedIn
          ? "Hello! We're glad you'here!"
          : "Please, log in to continue."}
      </p>
    </div>
  );
};

export default ToggleMessage;
