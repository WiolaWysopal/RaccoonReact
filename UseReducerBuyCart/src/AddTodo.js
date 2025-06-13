import React, { useState } from "react";

const AddTodo = ({ add }) => {
  const [text, setText] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="AddTodo">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="AddTodoInput"
        placeholder="Product name"
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="AddTodoInput"
        placeholder="Quantity"
        min="1"
      />

      <button
        className="AddTodoButton"
        onClick={() => {
          add(text);
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
