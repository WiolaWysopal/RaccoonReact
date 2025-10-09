"use client";
import React, { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";

// Lazy load komponentu
const Albums = lazy(() => import("./Albums"));
const Members = lazy(() => import("./Members"));
const Tours = lazy(() => import("./Tours"));

function App() {
  return (
    <div className="App">
      <h1>The Beatles</h1>
      <Suspense fallback={<h2>🎵 Ładowanie...</h2>}>
        <ErrorBoundary
          FallbackComponent={() => <div>ALBUMS: Something went wrong</div>}
        >
          <Albums />
        </ErrorBoundary>
      </Suspense>

      <h1>Członkowie</h1>
      <Suspense fallback={<h2>👤 Wyświetlanie członków...</h2>}>
        <ErrorBoundary
          FallbackComponent={() => <div>MEMBERS: Something went wrong</div>}
        >
          <Members />
        </ErrorBoundary>
      </Suspense>

      <h2>Tours</h2>
      <Suspense fallback={<h2>✈️🚂 Ładowanie tras koncertowych...</h2>}>
        <ErrorBoundary
          FallbackComponent={() => <div>TOURS: Something went wrong</div>}
        >
          <Tours />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

export default App;
