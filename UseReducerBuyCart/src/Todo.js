import React, { useState } from "react";

const Todo = ({ todo, remove, edit }) => {
  const [mode, setMode] = useState("list");
  const [quantity, setQuantity] = useState(todo.quantity);

  return (
    <div className="Todo">
      {mode === "list" ? (
        <>
          <span className="TodoText">
            {todo.text} (x {todo.quantity})
          </span>
          <button className="RemoveTodo" onClick={remove}>
            Remove Item
          </button>
          <button className="EditTodo" onClick={() => setMode("edit")}>
            Update Quantity
          </button>
        </>
      ) : (
        <>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="EditTodoInput"
          />
          <button
            className="EditTodoSave"
            onClick={() => {
              edit(quantity);
              setMode("list");
            }}
          >
            Save
          </button>
          <button className="EditTodoCancel" onClick={() => setMode("list")}>
            Cancel
          </button>
        </>
      )}
    </div>
  );
};

export default Todo;
