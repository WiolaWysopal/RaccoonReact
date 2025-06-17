import { useContext, createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [val, setVal] = useState(true);

  return (
    <ThemeContext.Provider value={{ val, setVal }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const val = useContext(ThemeContext);
  if (val === undefined) throw new Error("Context is undefined");
  return val;
};

export default ThemeProvider;

// children – to wbudowany props w React. Reprezentuje wszystko, co zostanie umieszczone wewnątrz komponentu ThemeProvider przy jego użyciu.
//Provider to komponent kontekstu, który dostarcza dane innym komponentom znajdującym się wewnątrz niego.
