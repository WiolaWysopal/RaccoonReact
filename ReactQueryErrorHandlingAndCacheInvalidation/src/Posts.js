import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export default function Posts() {
  const queryClient = useQueryClient();

  // Post Downloading with error handling
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) throw new Error(`Błąd pobierania: ${res.status}`);
      return res.json();
    },
    onError: (err) => {
      console.error("Błąd zapytania GET:", err);
    },
  });

  // Form State
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Add Post Mutation with error handling
  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });
      if (!res.ok) throw new Error(`Błąd dodawania: ${res.status}`);
      return res.json();
    },
    onSuccess: () => {
      alert("Post dodany pomyślnie!");
      queryClient.invalidateQueries(["posts"]);
    },
    onError: (err) => {
      console.error("Błąd zapytania POST:", err);
      alert(`Nie udało się dodać posta: ${err.message}`);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ title, body });
    setTitle("");
    setBody("");
  };

  if (isLoading) return <p>⏳ Ładowanie danych...</p>;
  if (isError) return <p>❌ Wystąpił błąd: {error.message}</p>;

  return (
    <div>
      <h2>Dodaj nowy post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tytuł"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder="Treść posta"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <br />
        <button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? "Dodawanie..." : "Dodaj"}
        </button>
      </form>

      <h2>Lista postów</h2>
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
