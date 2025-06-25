import React from "react";
import { Provider } from "react-redux";
import storeVariable from "./store";
import Todo from "./Todo";
import "./App.css";

function App() {
  return (
    <Provider store={storeVariable}>
      <Todo />
    </Provider>
  );
}

export default App;
