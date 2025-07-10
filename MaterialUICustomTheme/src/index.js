import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { setupTheme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = setupTheme();

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline enableColorScheme />
    <App />
  </ThemeProvider>,
);
