import React, { useState } from "react";
import { observer } from "mobx-react";
import todoStore from "./TodoStore";

const TodoApp = observer(() => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      todoStore.addTodo(input.trim());
      setInput("");
    }
  };

  return (
    <div>
      <h2> Todo List </h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add task"
      />
      <butto onClick={handleAdd}> Add </butto>

      <div>
        <button onClick={() => todoStore.setFilter("all")}> All </button>
        <button onClick={() => todoStore.setFilter("pending")}>
          {" "}
          Pending{" "}
        </button>
        <button onClick={() => todoStore.setFilter("done")}> Done </button>
      </div>

      <ul>
        {todoStore.filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => todoStore.toggleTodo(todo.id)}
            />
            <span> {todo.text} </span>
            <button onClick={() => todoStore.removeTodo(todo.id)}>
              {" "}
              Remove{" "}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default TodoApp;
