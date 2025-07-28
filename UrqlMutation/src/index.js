import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider, createClient, cacheExchange, fetchExchange } from "urql";

const client = createClient({
  url: "http://localhost:4000/",
  exchanges: [cacheExchange, fetchExchange],
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
