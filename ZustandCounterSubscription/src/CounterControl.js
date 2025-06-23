import useCounter from "./ZustandCounter";

const CounterControl = () => {
  const incrementCounter = useCounter((state) => state.incrCounter);
  const decrementCounter = useCounter((state) => state.decrCounter);

  return (
    <div>
      <button onClick={incrementCounter}> Increment Counter </button>
      <button onClick={decrementCounter}> Decrement Counter </button>
    </div>
  );
};

export default CounterControl;
