import ListComponent from "./ListComponent";
import "./App.css";

function App() {
  const names = ["Anna", "Bartek", "Celina", "Dawid"];

  return (
    <div className="App">
      <h1>Name List</h1>
      <ListComponent nameList={names} />
    </div>
  );
}

export default App;
