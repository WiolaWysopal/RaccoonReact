import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo } from "./todoSlice";

const Todo = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange}></input>
      <button onClick={handleAddTodo}> Add Todo </button>{" "}
      <ul>
        {" "}
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              className="li"
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {" "}
              {todo.text}{" "}
            </span>{" "}
            <button onClick={() => handleToggleComplete(todo.id)}>
              {" "}
              {todo.completed ? "Mark Incomplete" : "Mark Complete"}{" "}
            </button>{" "}
            <button onClick={() => handleDeleteTodo(todo.id)}> Delete </button>
          </li>
        ))}{" "}
      </ul>{" "}
    </div>
  );
};

export default Todo;
