import "./App.css";
import Home from "./pages/Home/home.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
