import { useRef } from "react";

function useClickHistory() {
  const historyRef = useRef([]);

  const addClick = () => {
    const nowVariable = new Date().toLocaleTimeString();
    historyRef.current.push(nowVariable);
  };

  const clearHistory = () => {
    historyRef.current = [];
  };

  const getHistory = () => [...historyRef.current];

  return { addClick, clearHistory, getHistory };
}

export default useClickHistory;
