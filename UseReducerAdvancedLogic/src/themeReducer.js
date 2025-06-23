export function themeReducer(state, action) {
  switch (action.type) {
    case "dark":
      return { ...state, dark: true };
    case "light":
      return { ...state, dark: false };
    case "login":
      return {
        ...state,
        user: {
          username: action.payload.username,
          isLoggedIn: true,
        },
      };
    case "logout":
      return {
        ...state,
        user: {
          username: "",
          isLoggedIn: false,
        },
      };
    default:
      return state;
  }
}
