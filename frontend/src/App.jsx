import "./App.css";
import Home from "./pages/Home/home.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";
import { Routes, Route } from "react-router";
import MovieSearch from "./pages/MovieSearch/MovieSearch.jsx";
import MovieDetails from "./pages/MovieDetails/MovieDetails.jsx";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<MovieSearch />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
