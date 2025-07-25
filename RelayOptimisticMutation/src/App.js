import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import AddTodo from "./AddTodo";

const fetchTodos = async () => {
  const res = await axios.get("http://localhost:3001/todos");
  return res.data;
};

function App() {
  const { data: todos, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <AddTodo />
    </div>
  );
}

export default App;
