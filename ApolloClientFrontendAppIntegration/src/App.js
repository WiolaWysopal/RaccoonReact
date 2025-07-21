import { useQuery, useMutation, gql } from "@apollo/client";
import { useState } from "react";

const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      author
    }
  }
`;

const ADD_BOOK = gql`
  mutation AddBook($title: String!, $author: String!) {
    addBook(title: $title, author: $author) {
      id
      title
      author
    }
  }
`;

function Books() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return data.books.map(({ id, title, author }) => (
    <div key={id}>
      <h3>{title}</h3>
      <p>
        <i>{author}</i>
      </p>
    </div>
  ));
}

function AddBookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [addBook] = useMutation(ADD_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;
    addBook({ variables: { title, author } });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
      />
      <button type="submit"> Add Book </button>
    </form>
  );
}

export default function App() {
  return (
    <div>
      <h2>📚 Book List </h2>
      <AddBookForm />
      <Books />
    </div>
  );
}
