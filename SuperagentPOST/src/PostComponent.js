import React, { useState } from "react";
import request from "superagent";

const PostComponent = () => {
  const [response, setResponse] = useState(null);

  const sendPostRequest = async () => {
    try {
      const res = await request
        .post("https://jsonplaceholder.typicode.com/posts")
        .send({
          title: "Hello world",
          body: "This is a test post",
          userId: 1,
        });

      setResponse(res.body);
    } catch (err) {
      console.error(err);
      setResponse({ error: "Something went wrong" });
    }
  };

  return (
    <div>
      <h2> Superagent POST Example </h2>
      <button onClick={sendPostRequest}> Send POST Request </button>

      {response && <pre> {JSON.stringify(response, null, 2)} </pre>}
    </div>
  );
};

export default PostComponent;
