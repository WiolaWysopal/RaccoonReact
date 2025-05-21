import React, { useState } from "react";

function MyComponent() {
  const [message, setMessage] = useState("Click button");

  const handleClick = () => {
    setMessage("Text has been changed!");
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default MyComponent;
