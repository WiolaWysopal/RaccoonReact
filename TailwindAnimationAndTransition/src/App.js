import "./App.css";
import CustomButton from "./CustomButton";
import SpinnerButton from "./SpinnerButton";
import PulseBox from "./PulseBox";

function App() {
  return (
    <>
      <div className="flex items-center">
        <CustomButton />
        <SpinnerButton />
      </div>

      <PulseBox />
    </>
  );
}

export default App;
