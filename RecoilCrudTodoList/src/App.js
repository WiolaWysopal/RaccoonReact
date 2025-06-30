import React from "react";
import { RecoilRoot } from "recoil";
import TaskList from "./TaskList";
import "./App.css";

export default function App() {
  return (
    <RecoilRoot>
      <TaskList />
    </RecoilRoot>
  );
}
