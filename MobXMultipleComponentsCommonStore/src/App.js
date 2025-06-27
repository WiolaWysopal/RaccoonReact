import "./App.css";
import CounterForm from "./CounterForm";
import CounterValue from "./CounterValue";
import CounterStats from "./CounterStats";

function App() {
  return (
    <div className="App">
      <CounterForm />
      <CounterValue />
      <CounterStats />
    </div>
  );
}

export default App;
