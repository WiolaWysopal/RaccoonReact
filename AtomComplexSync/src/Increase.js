import { useAtom } from "jotai";
import counterAtom from "./Atom";

const Increase = () => {
  const [count, setCount] = useAtom(counterAtom);
  const handleIncrement = () => setCount(count + 1);
  return <button onClick={handleIncrement}> Increase </button>;
};

export default Increase;
