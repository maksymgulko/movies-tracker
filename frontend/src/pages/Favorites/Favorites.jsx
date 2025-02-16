import { useEffect, useState } from "react";
import MoviesList from "../../components/MoviesList/MoviesList.jsx";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function getFavMovies() {
      try {
        const response = await fetch("/movies");
        if (response.ok) {
          const result = await response.json();
          setFavorites(result.data);
          console.log("Movies successfully fetched");
        } else {
          console.error("Failed to fetch movies");
        }
      } catch (error) {
        console.error(error);
      }
    }
    getFavMovies();
  }, []);

  // Callback to remove a movie from favorites in local state
  const handleDelete = (deletedId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((movie) => movie._id !== deletedId)
    );
  };

  return (
    <div>
      <h1>Favorite Movies</h1>
      <MoviesList
        toShow={false}
        deletable={true}
        movies={favorites}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Favorites;
