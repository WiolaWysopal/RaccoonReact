import React, { useState } from "react";

const initialItems = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Pear" },
  { id: 3, name: "Banana" },
  { id: 4, name: "Apricot" },
];

const SortableList = () => {
  const [items, setItems] = useState(initialItems);
  const [ascending, setAscending] = useState(true);

  const sortItems = () => {
    const sorted = [...items].sort((a, b) => {
      return ascending
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
    setItems(sorted);
    setAscending(!ascending);
  };

  return (
    <div className="p-4">
      <button onClick={sortItems} className="sort-button">
        Sort {ascending ? "ascendng" : "descending"}
      </button>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="mb-1">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortableList;
