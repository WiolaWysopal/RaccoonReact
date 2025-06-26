import "./App.css";
import { useSelector } from "react-redux";
import { UserForm } from "./components/UserForm";
import { SettingsForm } from "./components/SettingForm";
import { useEffect } from "react";

function App() {
  const user = useSelector((state) => state.user);
  const theme = useSelector((state) => state.settings.theme);

  // Zmiana motywu
  useEffect(() => {
    document.body.className = theme; // nadpisuje klasę body (light / dark)
  }, [theme]);

  return (
    <div className="App">
      <h1> Redux App </h1>
      <UserForm />
      <SettingsForm />
      <hr />
      <h2> Current State </h2>
      <pre> {JSON.stringify({ user, theme }, null, 2)} </pre>
    </div>
  );
}

export default App;
