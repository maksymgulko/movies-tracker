import { useEffect, useState } from "react";
import MoviesList from "../../components/MoviesList/MoviesList.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import { searchMovieByName } from "../../tmdb.js";
import { useSearchParams } from "react-router";

const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const movieTitle = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!movieTitle) return;

    const fetchMovies = async () => {
      try {
        const data = await searchMovieByName(movieTitle);
        setMovies(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchMovies();
  }, [movieTitle]);

  const handleSearch = (query) => {
    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <SearchBar value={movieTitle} onSearch={handleSearch} />
      <MoviesList toShow={true} movies={movies} />
    </div>
  );
};
export default MovieSearch;
