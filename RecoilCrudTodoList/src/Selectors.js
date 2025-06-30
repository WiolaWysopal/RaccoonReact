import { selector } from "recoil";
import { taskAtom } from "./Atom";

export const doneTaskSelector = selector({
  key: "doneTaskSelector",
  get: ({ get }) => get(taskAtom).filter((task) => task.done),
});

export const undoneTaskSelector = selector({
  key: "undoneTaskSelector",
  get: ({ get }) => get(taskAtom).filter((task) => !task.done),
});

export const sortedTastSelector = selector({
  key: "sortedTaskSelector",
  get: ({ get }) => {
    const taskVariable = get(taskAtom);
    return [...taskVariable].sort((a, b) => a.text.localeCompare(b.text));
  },
});
