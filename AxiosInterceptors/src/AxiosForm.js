import { useState } from "react";
import api from "./axios";

const AxiosForm = () => {
  const [postId, setPostId] = useState("");

  const handleUpdate = () => {
    if (!postId) return alert("Enter post ID to update");

    api
      .put(`/posts/${postId}`, {
        title: "Updated title",
        body: "Updated post content",
        userId: 1,
      })
      .then((res) => {
        console.log("Updated post:", res.data);
        alert(`Post ${postId} updated`);
      })
      .catch(() => alert("Update failed"));
  };

  const handleDelete = () => {
    if (!postId) return alert("Enter post ID to delete");

    api
      .delete(`/posts/${postId}`)
      .then(() => {
        console.log("Deleted post");
        alert(`Post ${postId} deleted`);
      })
      .catch(() => alert("Delete failed"));
  };

  return (
    <div>
      <h1> Edit or Delete Post </h1>
      <input
        type="number"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
        placeholder="Post ID"
        min="1"
        max="100"
      />
      <button onClick={handleUpdate}> Update </button>
      <button onClick={handleDelete}> Delete </button>
    </div>
  );
};

export default AxiosForm;
