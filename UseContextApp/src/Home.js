import { useTheme } from "./themeProvider";

const Home = () => {
  const { toggleTheme, darkMode } = useTheme();
  return (
    <div>
      <label>Toggle theme</label>
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={darkMode}
        className="inputBox"
      />
      <h1>I'm a Home Component</h1>
    </div>
  );
};

export default Home;
