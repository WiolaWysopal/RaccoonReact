import { useRef, useEffect } from "react";

export function usePrevious(value) {
  const prevRef = useRef();

  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return prevRef.current;
}
