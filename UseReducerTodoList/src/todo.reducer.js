export const initialState = {
  counter: 2,
  todos: [
    {
      id: 1,
      text: "One",
    },
    {
      id: 2,
      text: "Two",
    },
  ],
};

export const reducerVariable = (state, action) => {
  switch (action.type) {
    case "add": {
      const newCounter = state.counter + 1;
      const newTodo = {
        id: newCounter,
        text: action.text,
      };
      return {
        counter: newCounter,
        todos: [...state.todos, newTodo],
      };
    }
    case "edit": {
      const idxVariable = state.todos.findIndex((t) => t.id === action.id);
      const todoVariable = Object.assign({}, state.todos[idxVariable]);
      todoVariable.text = action.text;
      const todosVariable = Object.assign([], state.todos);
      todosVariable.splice(idxVariable, 1, todoVariable);
      return {
        counter: state.counter,
        todos: todosVariable,
      };
    }
    case "remove": {
      const idxVaraible = state.todos.findIndex((t) => t.id === action.id);
      const todosVariable = Object.assign([], state.todos);
      todosVariable.splice(idxVaraible, 1);
      return {
        counter: state.counter,
        todos: todosVariable,
      };
    }
    default:
      return state;
  }
};
