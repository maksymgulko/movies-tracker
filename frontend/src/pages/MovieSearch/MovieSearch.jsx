import { useState } from "react";
import MoviesList from "../../components/MoviesList/MoviesList.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import { searchMovieByName } from "../../tmdb.js";

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);

  async function fetchMovies(name) {
    try {
      const result = await searchMovieByName(name);
      setMovies(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <MoviesList movies={movies} />
      <SearchBar onSearch={fetchMovies} />
    </div>
  );
};
export default MovieSearch;
