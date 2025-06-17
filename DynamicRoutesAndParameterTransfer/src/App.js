import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";
import ProfilePage from "./ProfilePage";
import UserID from "./UserID";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="/ProfilePage/:id" element={<ProfilePage />} />
        <Route path="/UserID" element={<UserID />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
