import { useAtom } from "jotai";
import counterAtom from "./Atom";

const Display = () => {
  const [count] = useAtom(counterAtom);
  return <h2> Current value: {count} </h2>;
};

export default Display;
