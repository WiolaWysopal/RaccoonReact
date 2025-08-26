import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

if (process.env.NODE_ENV !== "production") {
  // Ładujemy axe tylko w trybie dev
  import("@axe-core/react").then((axe) => {
    const ReactAxe = axe.default;
    const ReactDOMLib = require("react-dom");
    ReactAxe(React, ReactDOMLib, 1000);
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
