// useState do przechowywania pobranych danych
// useEffect do wykonania zapytania API po załadowaniu komponentu

import React, { useState, useEffect } from "react";

const Posts = () => {
  // Hook do przechowywania danych
  const [posts, setPosts] = useState([]);
  // Hook do przechowywania stanu ładowania
  const [loading, setLoading] = useState(true);

  // Hook useEffect do pobierania danych z API
  useEffect(() => {
    // Funkcja asynchroniczna do pobrania danych
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const data = await response.json();
        setPosts(data); // Zapisz pobrane dane w stanie
      } catch (error) {
        console.error("Błąd pobierania danych:", error);
      } finally {
        setLoading(false); // Po zakończeniu ładowania
      }
    };

    fetchPosts();
  }, []); // Pusta tablica zależności oznacza, że efekt wykona się tylko raz, po załadowaniu komponentu

  // Renderowanie
  if (loading) {
    return <div>Data loading...</div>;
  }

  return (
    <div>
      <h1>Posts list</h1>
      <ul>
        {posts.slice(0, 5).map(
          (
            post, // Wyświetlenie pierwszych 5 postów
          ) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default Posts;
