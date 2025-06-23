import { useReducer } from "react";

import { themeContext } from "./ThemeContext";
import { themeReducer } from "./themeReducer";
import { initialState } from "./themeState";

export default function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <themeContext.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
}
