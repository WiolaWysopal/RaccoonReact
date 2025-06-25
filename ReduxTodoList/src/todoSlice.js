import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },

    toggleComplete: (state, action) => {
      const todoVariable = state.find((todo) => todo.id === action.payload);
      if (todoVariable) {
        todoVariable.completed = !todoVariable.completed;
      }
    },
    deleteTodo: (state, action) => {
      const indexVariable = state.findIndex(
        (todo) => todo.id === action.payload,
      );
      if (indexVariable !== -1) {
        state.splice(indexVariable, 1);
      }
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
