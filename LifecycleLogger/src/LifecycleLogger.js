import React, { useEffect } from "react";

export default function LifecycleLogger() {
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  return (
    <div>
      <h2>Lifecycle Logger</h2>
      <p>Check the console to see mount and unmount messages.</p>
    </div>
  );
}
