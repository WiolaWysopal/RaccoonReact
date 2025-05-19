import React from "react";

const Widget = ({ title, description, value }) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <strong>{value}</strong>
    </div>
  );
};

export default Widget;
