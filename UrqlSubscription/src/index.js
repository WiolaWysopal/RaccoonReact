import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { Provider } from "urql";
import { client } from "./urqlClient.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider value={client}>
    <App />
  </Provider>,
);
