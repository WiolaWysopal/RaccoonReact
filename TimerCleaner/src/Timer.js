import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup przy odmontowaniu
    return () => {
      console.log("Timer Component has been unmounted.");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>Timer</h2>
      <p>{seconds} s. passed</p>
    </div>
  );
};

export default Timer;
