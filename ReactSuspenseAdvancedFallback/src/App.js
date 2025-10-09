import React, { Suspense, lazy } from "react";

// Lazy load komponentu
const Albums = lazy(() => import("./Albums"));
const Members = lazy(() => import("./Members"));
const Tours = lazy(() => import("./Tours"));

function App() {
  return (
    <div className="App">
      <h1> The Beatles </h1>
      <Suspense fallback={<h2> 🎵 Ładowanie... </h2>}>
        <Albums />
      </Suspense>

      <h1> Członkowie </h1>
      <Suspense fallback={<h2> 👤 Wyświetlanie członków... </h2>}>
        <Members />
      </Suspense>

      <h2> Tours </h2>
      <Suspense fallback={<h2> ✈️🚂 Ładowanie tras koncertowych... </h2>}>
        <Tours />
      </Suspense>
    </div>
  );
}

export default App;
