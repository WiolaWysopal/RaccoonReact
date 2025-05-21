import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Button from "./Button";
import MessageChannel from "./Message";

function App() {
  const [message, setMessage] = useState("Hello in App!");

  const handleChangeMessage = () => {
    setMessage("Message has been changed!");
  };

  return (
    <div className="App">
      <Header />
      <MessageChannel text={message} />
      <Button onClick={handleChangeMessage} />
    </div>
  );
}

export default App;
