import React from "react";

const TodoList = () => {
  const todos = [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Do a task with API" },
    { id: 3, text: "Repeat Promises" },
  ];

  return (
    <div>
      <h2>To-Do List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>✅ {todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
