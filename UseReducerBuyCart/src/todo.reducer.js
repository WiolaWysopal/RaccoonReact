export const initialState = {
  counter: 2,
  todos: [
    {
      id: 1,
      text: "Car",
      quantity: 2,
    },
    {
      id: 2,
      text: "Bike",
      quantity: 4,
    },
  ],
};

export const reducerVariable = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const newCounter = state.counter + 1;
      const newTodo = {
        id: newCounter,
        text: action.text,
        quantity: action.quantity,
      };
      return {
        counter: newCounter,
        todos: [...state.todos, newTodo],
      };
    }
    case "UPDATE_QUANTITY": {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, quantity: action.quantity } : todo,
        ),
      };
    }

    case "REMOVE_ITEM": {
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
