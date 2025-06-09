import React from "react";

function TaskList({ tasks }) {
  console.log("TaskList rendered");

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}

// React.memo zapobiega zbędnym rerenderom jeśli propsy się nie zmieniają
export default React.memo(TaskList);
