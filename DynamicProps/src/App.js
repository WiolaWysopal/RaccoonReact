import React from "react";
import List from "./List";
import "./App.css";

function App() {
  const items = ["Jabłka", "Banany", "Pomarańcze"];

  return (
    <div className="App">
      <h1>Lista owoców:</h1>
      <List items={items} />
    </div>
  );
}

export default App;
