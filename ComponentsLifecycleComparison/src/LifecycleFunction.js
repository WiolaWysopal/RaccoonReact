import React, { useEffect, useState } from "react";

const LifecycleFunction = () => {
  const [count, setCount] = useState(0);

  // componentDidMount
  useEffect(() => {
    console.log("componentDidMount");

    // componentWillUnmount
    return () => {
      console.log("componentWillUnmount");
    };
  }, []);

  // componentDidUpdate (dla count)
  useEffect(() => {
    if (count !== 0) {
      console.log("componentDidUpdate");
    }
  }, [count]);

  return (
    <div>
      <p>Clicks: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default LifecycleFunction;
