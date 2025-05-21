import React from "react";

function ListComponent({ nameList }) {
  return (
    <ul>
      {nameList.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}

export default ListComponent;
