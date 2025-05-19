import React from "react";

const Parent = ({ children }) => {
  return (
    <div style={{ border: "2px solid blue", padding: "10px" }}>
      <h2>This is Parent Component</h2>
      {children}
    </div>
  );
};

export default Parent;
