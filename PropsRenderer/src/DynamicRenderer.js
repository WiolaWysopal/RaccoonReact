import React from "react";

const DynamicRenderer = ({ type, content, onClick }) => {
  switch (type) {
    case "header":
      return <h1>{content}</h1>;
    case "paragraph":
      return <p>{content}</p>;
    case "button":
      return <button onClick={onClick}>{content}</button>;
    default:
      return null;
  }
};

export default DynamicRenderer;
