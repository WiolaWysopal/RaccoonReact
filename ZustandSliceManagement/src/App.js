import "./App.css";
import UserForm from "./UserForm";
import ThemeToggleButton from "./ThemeToggleButton";
import UserProfile from "./UserProfile";
import { useStore } from "./store";
import { useEffect } from "react";

function App() {
  const theme = useStore((state) => state.theme);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <ThemeToggleButton />
      <UserForm />
      <UserProfile />
    </div>
  );
}

export default App;
