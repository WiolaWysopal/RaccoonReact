import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  const getInitialValue = () => {
    const storedValue = localStorage.getItem(key);
    try {
      return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
    } catch (error) {
      console.warn("localStorage reading error:", error);
      return defaultValue;
    }
  };

  const [value, setValue] = useState(getInitialValue);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn("localStorage writing error:", error);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
