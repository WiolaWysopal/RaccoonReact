import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Do API excercice" },
    { id: 3, text: "Repeat Promises" },
  ]);

  const [newTodo, setNewTodo] = useState("");

  // Dodaj nowe zadanie
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return; // ignoruj puste zadania

    const nextId =
      todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
    const todoToAdd = { id: nextId, text: newTodo.trim() };

    setTodos([...todos, todoToAdd]);
    setNewTodo("");
  };

  // Usuń zadanie po id
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>Lista zadań</h2>

      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Nowe zadanie..."
        />
        <button type="submit">Dodaj</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            ✅ {todo.text}{" "}
            <button onClick={() => handleDeleteTodo(todo.id)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
