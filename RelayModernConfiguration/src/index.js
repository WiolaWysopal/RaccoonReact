// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import App from "./App";
import environment from "./RelayEnvironment";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RelayEnvironmentProvider environment={environment}>
    <App />
  </RelayEnvironmentProvider>,
);
