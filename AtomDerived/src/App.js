import "./App.css";
import { atom, useAtom } from "jotai";

const counter = atom(0);

function App() {
  const [count, setCounter] = useAtom(counter);
  const derivedAtomVariable = atom((get) => get(counter) * 2);
  const doubleCount = useAtom(derivedAtomVariable);

  const increase = () => setCounter((prev) => prev + 1);
  const decrease = () => setCounter((prev) => prev - 1);

  return (
    <div className="App">
      <h2> Counter </h2>
      <h3> {count} </h3>
      <button onClick={increase}> Increase </button>
      <button onClick={decrease}> Decrease </button>
      <h2> Double Counter </h2>
      <h3> {doubleCount} </h3>
    </div>
  );
}

export default App;
