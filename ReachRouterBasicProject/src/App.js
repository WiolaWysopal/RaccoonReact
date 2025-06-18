import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import StronaGlowna from "./StronaGlowna";
import Onas from "./Onas";
import Kontakt from "./Kontakt";

function App() {
  return (
    <div className="App">
      <Router>
        <StronaGlowna path="/" />
        <Onas path="/aboutus" />
        <Kontakt path="/contact" />
      </Router>
    </div>
  );
}

export default App;
