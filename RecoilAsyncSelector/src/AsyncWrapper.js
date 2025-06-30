import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

const AsyncWrapper = ({ errorFallback, children }) => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <ErrorBoundary fallback={errorFallback}>{children}</ErrorBoundary>
    </Suspense>
  );
};

export default AsyncWrapper;
