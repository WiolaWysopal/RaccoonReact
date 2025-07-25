import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "urql";
import { clientVariable } from "./urqlClient";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider value={clientVariable}>
      <App />
    </Provider>
  </React.StrictMode>,
);
