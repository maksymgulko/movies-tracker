import { useEffect, useState } from "react";
import MoviesList from "../../components/MoviesList/MoviesList.jsx";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getFavMovies = async () => {
      try {
        const movies = await fetch("/movies");

        if (movies.ok) {
          const result = await movies.json();
          setFavorites(result.data);
          console.log("Movies successfully fetched");
        } else {
          console.error("Failed to fetch movies");
        }
      } catch (error) {
        console.error(error);
      }
    };
    getFavMovies();
  }, []);

  return (
    <div>
      <MoviesList movies={favorites} />
    </div>
  );
};
export default Favorites;
