import "./App.css";
import Home from "./Home";
import { ThemeProvider } from "./themeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
