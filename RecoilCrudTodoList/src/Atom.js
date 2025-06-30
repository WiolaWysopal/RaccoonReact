import { atom } from "recoil";

export const tasksAtom = atom({
  key: "taskAtom",
  default: [{ id: 1, text: "First task", done: false }],
});
