import "./App.css";
import ResponsiveCard from "./ResponsiveCard";
import ResponsiveForm from "./ResponsiveForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <ResponsiveCard
        title="My Card"
        content="This is sample content of the Card that adjusts to the screen size."
      />
      <ResponsiveForm />
    </div>
  );
}

export default App;
