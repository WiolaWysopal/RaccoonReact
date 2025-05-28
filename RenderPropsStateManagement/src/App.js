import React, { useState } from "react";
import TaskManager from "./TaskManager";
import "./App.css";

const App = () => {
  const [newTaskText, setNewTaskText] = useState("");

  return (
    <TaskManager>
      {({ tasks, addTask, deleteTask, updateTask }) => (
        <div class="App">
          <h2>Tasks List</h2>

          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="New task"
          />
          <button
            onClick={() => {
              addTask(newTaskText);
              setNewTaskText("");
            }}
          >
            Add
          </button>

          <ul>
            {tasks.map((task) => (
              <li key={task.id} style={{ marginTop: "10px" }}>
                <input
                  type="text"
                  value={task.text}
                  onChange={(e) => updateTask(task.id, e.target.value)}
                />
                <button
                  onClick={() => deleteTask(task.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Usuń
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </TaskManager>
  );
};

export default App;
