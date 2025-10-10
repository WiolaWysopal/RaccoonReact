import { lazy, Suspense } from "react";
import "./App.css";

import LoadingFooter from "./LoadingFooter";
import LoadingHeader from "./LoadingHeader";
import LoadingMain from "./LoadingMain";

const delayImport = (importFn, ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(importFn()), ms);
  });
};

const Header = lazy(() => delayImport(() => import("./Header"), 2000));
const Main = lazy(() => delayImport(() => import("./Main"), 3000));
const Footer = lazy(() => delayImport(() => import("./Footer"), 1000));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingHeader />}>
        <Header />
      </Suspense>

      <Suspense fallback={<LoadingMain />}>
        <Main />
      </Suspense>

      <Suspense fallback={<LoadingFooter />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
