import { useContext } from "react";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../App";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <ReactSwitch
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={handleThemeToggle}
        checked={theme === "dark"}
      />
    </div>
  );
};

export default ThemeToggle;
