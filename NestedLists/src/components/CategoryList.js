import React from "react";
import CategoryItems from "./CategoryItems";

const categories = [
  {
    id: "c1",
    name: "Fruits",
    items: [
      { id: "i1", name: "Apple" },
      { id: "i2", name: "Banana" },
    ],
  },
  {
    id: "c2",
    name: "Vegetables",
    items: [
      { id: "i3", name: "Carrot" },
      { id: "i4", name: "Broccoli" },
    ],
  },
];

const CategoryList = () => {
  return (
    <div>
      {categories.map((category) => (
        <div key={category.id} style={{ marginBottom: "1rem" }}>
          <h2>{category.name}</h2>
          <CategoryItems items={category.items} />
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
