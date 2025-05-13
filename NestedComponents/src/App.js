import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "./App.css";

function App() {
  const appTitle = "My React App";
  const welcomeMessage = "Welcome to our simple component app!";
  const authorName = "Wiola for Raccoon";

  return (
    <div className="App">
      <Header title={appTitle} />
      <Content message={welcomeMessage} />
      <Footer author={authorName} />
    </div>
  );
}

export default App;
