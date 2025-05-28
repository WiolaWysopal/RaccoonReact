import React, { useState } from "react";

const ItemManager = ({ children }) => {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");

  const addItem = () => {
    if (inputText.trim()) {
      setItems((prevItems) => [...prevItems, inputText]);
      setInputText("");
    }
  };

  return children({
    items,
    inputText,
    setInputText,
    addItem,
  });
};

export default ItemManager;
