import React from "react";
import { useRecoilValue } from "recoil";
import { tasksAtom } from "./Atom";

export default function Summary() {
  const tasks = useRecoilValue(tasksAtom);
  const doneCount = tasks.filter((t) => t.done).length;
  const undoneCount = tasks.length - doneCount;

  return (
    <div>
      <h3> Summary </h3>
      <p> All tasks: {tasks.length}</p>
      <p> Done: {doneCount}</p>
      <p> Undone: {undoneCount}</p>
    </div>
  );
}
