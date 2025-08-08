import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export default function Posts() {
  const queryClient = useQueryClient();

  // Post Downloading
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json(),
      ),
  });

  // Form State
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Add Post Mutation
  const mutation = useMutation({
    mutationFn: (newPost) =>
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      }).then((res) => res.json()),
    onSuccess: () => {
      alert("Post dodany pomyślnie!");
      queryClient.invalidateQueries(["posts"]); // List refresh
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ title, body });
    setTitle("");
    setBody("");
  };

  if (isLoading) return <p> Data Loading...</p>;

  return (
    <div>
      <h2> Add new post </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder=" Title "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder=" Post content "
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <br />
        <button type="submit"> Add </button>
      </form>

      <h2> Posts List </h2>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
