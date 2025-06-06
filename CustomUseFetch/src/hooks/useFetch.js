import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const controllerVariable = new AbortController();

    setLoading(true);
    setError(null);

    fetch(url, { signal: controllerVariable.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ERROR: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => controllerVariable.abort();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
