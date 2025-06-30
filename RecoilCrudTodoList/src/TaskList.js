import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { tasksAtom } from "./Atom";
import Summary from "./Summary";

export default function TaskList() {
  const [tasks, setTasks] = useRecoilState(tasksAtom);
  const [newTaskText, setNewTaskText] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const addTask = () => {
    if (!newTaskText.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: newTaskText.trim(), done: false },
    ]);
    setNewTaskText("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleDone = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const startEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    if (!editText.trim()) return;
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, text: editText.trim() } : t)),
    );
    setEditId(null);
    setEditText("");
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>To-Do List</h2>
      <input
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        placeholder="New task"
      />
      <button onClick={addTask}> Add </button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: 8 }}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleDone(task.id)}
            />
            {editId === task.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => saveEdit(task.id)}> Save </button>
                <button onClick={() => setEditId(null)}> Cancel </button>
              </>
            ) : (
              <>
                <span
                  style={{
                    textDecoration: task.done ? "line-through" : "none",
                    marginLeft: 8,
                  }}
                >
                  {task.text}
                </span>
                <button
                  onClick={() => startEdit(task.id, task.text)}
                  style={{ marginLeft: 8 }}
                >
                  {" "}
                  Edit{" "}
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  style={{ marginLeft: 4 }}
                >
                  {" "}
                  Remove{" "}
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
      <Summary />
    </div>
  );
}
