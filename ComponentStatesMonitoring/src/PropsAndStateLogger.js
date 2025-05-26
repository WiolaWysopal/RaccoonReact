import React, { useEffect, useState } from "react";

const PropsAndStateLogger = ({ message }) => {
  const [count, setCount] = useState(0);

  // efekt po montowaniu
  useEffect(() => {
    console.log("Component has been mounted");
    return () => {
      console.log("Component will be unmounted");
    };
  }, []);

  // efekt po każdej zmianie stanu lub propsów
  useEffect(() => {
    console.log(`counter has changed: ${count}`);
  }, [count]);

  useEffect(() => {
    console.log(`🟣 props.message has changed: ${message}`);
  }, [message]);

  return (
    <div>
      <p>{message}</p>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increace counter</button>
    </div>
  );
};

export default PropsAndStateLogger;
