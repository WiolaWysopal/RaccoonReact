import { useAtom } from "jotai";
import counterAtom from "./Atom";

const Decrease = () => {
  const [count, setCount] = useAtom(counterAtom);
  const handleDecrement = () => setCount(count - 1);
  return <button onClick={handleDecrement}> Decrease </button>;
};

export default Decrease;
