import React, { Suspense, lazy } from "react";

// Lazy load komponentu
const Albums = lazy(() => import("./Albums"));

function App() {
  return (
    <div className="App">
      <h1>The Beatles</h1>
      <Suspense fallback={<h2>Ładowanie...</h2>}>
        <Albums />
      </Suspense>
    </div>
  );
}

export default App;
