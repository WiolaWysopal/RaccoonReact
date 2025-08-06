import React, { useState } from "react";

const AxiosForm = () => {
  const [postId, setPostId] = useState("");

  const handleUpdate = () => {
    if (!postId) return alert("To update a post, type its ID");

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title: "Updated title",
        body: "Updated post content",
        userId: 1, // <-- poprawione!
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Updated:", data);
        alert(`Post ${postId} has been updated.`);
      });
  };

  const handleDelete = () => {
    if (!postId) return alert("To delete a post, type its ID");

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "DELETE",
    }).then(() => {
      console.log("Post has been deleted");
      alert(`Post ${postId} has been deleted`);
    });
  };

  return (
    <div>
      <h1>Edit or delete a post</h1>

      <label>
        Type post ID:
        <input
          type="number"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
          placeholder="e.g. 1"
          min="1"
          max="100"
        />
      </label>

      <div>
        <button onClick={handleUpdate}>Update post</button>
        <button onClick={handleDelete} style={{ marginLeft: "1rem" }}>
          Delete post
        </button>
      </div>
    </div>
  );
};

export default AxiosForm;
