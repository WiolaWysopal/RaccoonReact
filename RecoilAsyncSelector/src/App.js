import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import List from "./List";
import PokemonDetails from "./PokemonDetails";
import AsyncWrapper from "./AsyncWrapper";

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <h1>
                {" "}
                <Link to="/">Pokedex</Link>{" "}
              </h1>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<List />} />
          <Route
            path="/pokemon/:id"
            element={
              <AsyncWrapper>
                <PokemonDetails />
              </AsyncWrapper>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
