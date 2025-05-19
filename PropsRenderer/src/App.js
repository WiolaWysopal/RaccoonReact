import React from "react";
import DynamicRenderer from "./DynamicRenderer";
import "./App.css";

const App = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <DynamicRenderer type="header" content="Welcome on my website!" />
      <DynamicRenderer type="paragraph" content="This is just a paragraph." />
      <DynamicRenderer
        type="button"
        content="Click on me"
        onClick={handleClick}
      />
    </div>
  );
};

export default App;
