import React, { useEffect } from "react";

const withRenderTimer = (WrappedComponent) => {
  return function WithRenderTimerWrapper(props) {
    const start = performance.now(); // Start pomiaru

    useEffect(() => {
      const end = performance.now(); // Koniec pomiaru po renderze
      console.log(
        `[withRenderTimer] Rendering Time: ${WrappedComponent.name}: ${(end - start).toFixed(2)} ms`,
      );
    });

    return <WrappedComponent {...props} />;
  };
};

export default withRenderTimer;
