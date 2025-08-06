import { useEffect } from "react";
import superagent from "superagent";

const SuperagentGet = () => {
  useEffect(() => {
    superagent
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        console.log("API Data:", res.body);
      })
      .catch((err) => {
        console.error("Data Downloading Error:", err);
      });
  }, []);

  return (
    <div>
      <h2>Check DevTools Console 👇</h2>
    </div>
  );
};

export default SuperagentGet;
