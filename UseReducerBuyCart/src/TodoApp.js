import React, { useReducer } from "react";
import { initialState, reducerVariable } from "./todo.reducer.js";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducerVariable, initialState);
  return (
    <>
      <AddTodo add={(text) => dispatch({ type: "ADD_ITEM", text: text })} />
      {state.todos.map((t) => (
        <Todo
          key={t.id}
          todo={t}
          remove={() => dispatch({ type: "REMOVE_ITEM", id: t.id })}
          edit={(quantity) =>
            dispatch({ type: "UPDATE_QUANTITY", id: t.id, quantity })
          }
        />
      ))}
    </>
  );
};
export default TodoApp;
