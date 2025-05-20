import logo from "./logo.svg";
import "./App.css";
import LogHelloWorld from "./Hello";

function App() {
  return (
    <div className="App">
      <h1>Greetings</h1>
      <LogHelloWorld greetings="Hello world!" />
    </div>
  );
}

export default App;
