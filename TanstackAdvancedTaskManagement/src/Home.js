import React, { useState } from "react";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

function Home({ postId }) {
  const queryClient = useQueryClient();

  // Pobieranie danych

  const { data, isLoading, isError } = useQuery({
    queryKey: ["post", postId],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
      );
      return data;
    },
  });

  // Ustawianie stany edytowalnego tytułu

  const [title, setTitle] = useState("");

  // Mytacja odpowiedzialna za edycję posta

  const editPostMutation = useMutation({
    mutationFn: async (updatedPost) => {
      const { data } = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        updatedPost,
      );
      return data;
    },

    onSuccess: (updatedData) => {
      // Odśwież dane po edycji
      queryClient.setQueryData(["post", postId], updatedData);
    },
  });

  if (isLoading) return <p> Loading... </p>;
  if (isError) return <p style={{ color: "red" }}> Post fetching error </p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      editPostMutation.mutate({ ...data, title });
      setTitle("");
    }
  };

  return (
    <div>
      <h1>Post #{data.id}</h1>
      <p>
        <strong> Title: </strong> {data.title}{" "}
      </p>
      <p>
        <strong> Body: </strong> {data.body}{" "}
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nowy tytuł"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Zapisz</button>
      </form>
    </div>
  );
}

export default Home;
