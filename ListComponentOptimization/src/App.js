import React, { useState, useCallback, useMemo } from "react";
import TaskList from "./TaskList";
import "./App.css";

const initialTasks = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Write code" },
  { id: 3, title: "Read a book" },
  { id: 4, title: "Go jogging" },
];

export default function App() {
  const [tasks] = useState(initialTasks);
  const [filter, setFilter] = useState("");

  // Memoizujemy funkcję filtrowania
  const filterTasks = useCallback((tasks, filterText) => {
    console.log("Filtering tasks...");
    if (!filterText) return tasks;
    return tasks.filter((task) =>
      task.title.toLowerCase().includes(filterText.toLowerCase()),
    );
  }, []);

  // Memoizujemy wynik filtrowania, by nie liczyć na nowo jeśli filter lub tasks się nie zmieniły
  const filteredTasks = useMemo(
    () => filterTasks(tasks, filter),
    [tasks, filter, filterTasks],
  );

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Task Filter with useCallback and React.memo</h1>
      <input
        type="text"
        placeholder="Filter tasks..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ padding: "0.5rem", width: "300px", marginBottom: "1rem" }}
      />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}
