import "./App.css";
import HelloComponent from "./Hello";
import InfoComponent from "./Info";
import HowToIntegrateComponent from "./HowTointegrate";

function App() {
  return (
    <div className="App">
      <HelloComponent />
      <main>
        <InfoComponent />
        <HowToIntegrateComponent />
      </main>
    </div>
  );
}

export default App;
