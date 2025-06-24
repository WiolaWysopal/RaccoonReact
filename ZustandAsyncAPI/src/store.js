import { create } from "zustand";

const loggerVariable = (config) => (set, get, api) =>
  config(
    (args) => {
      console.log("The state has been changed: ", args);
      set(args);
      console.log("New state: ", get());
    },
    get,
    api,
  );

const createUserSlice = (set, get) => ({
  users: [],
  loading: false,
  error: null,

  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const resVariable = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      if (!resVariable.ok) throw new Error("Something went wrong :(");
      const dataVariable = await resVariable.json();
      set({ users: dataVariable, loading: false });
    } catch (error) {
      set({ error: error.Message, loading: false });
    }
  },
});

export const useStore = create(
  loggerVariable((set, get) => ({
    ...createUserSlice(set, get),
  })),
);
