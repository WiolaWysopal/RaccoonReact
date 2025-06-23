import useCounter from "./ZustandCounter";

const DisplayCounter = () => {
  const counterVariable = useCounter((state) => state.counter);
  return <div>Counter: {counterVariable}</div>;
};

export default DisplayCounter;
