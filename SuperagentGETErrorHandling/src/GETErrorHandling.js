import React, { useState } from "react";
import request from "superagent";

const GETErrorHandling = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  const fetchComments = async () => {
    setError(null); // error reset

    try {
      const res = await request
        .get("https://jsonplaceholder.typicode.com/comments")
        .query({ postId: 1 });

      setComments(res.body);
    } catch (err) {
      if (err.status === 404) {
        setError("Error 404: Source hasn't been found");
      } else if (err.status === 500) {
        setError("Error 500: Server Error");
      } else {
        setError("An unexpected error has occured");
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Superagent with parameters</h1>
      <button onClick={fetchComments}>Download comments (postId=1)</button>

      {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}

      {comments.length > 0 && (
        <ul style={{ marginTop: "20px" }}>
          {comments.map((comment) => (
            <li key={comment.id}>
              <strong>{comment.name}</strong>: {comment.body}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GETErrorHandling;
