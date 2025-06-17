import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
