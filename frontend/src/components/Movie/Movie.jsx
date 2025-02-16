import { Link, useLocation } from "react-router-dom";

const Movie = ({ toShow, movie }) => {
  const location = useLocation();

  // Determine the movie identifier. Trending movies have 'id',
  // while favorites (saved from TMDB) have 'tmdbId'.
  const movieId = movie.id || movie.tmdbId;

  const addFavorite = async () => {
    try {
      const response = await fetch("/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // When saving, the controller maps the 'id' to 'tmdbId'
        body: JSON.stringify(movie),
      });

      if (response.ok) {
        console.log("Movie added to favorites successfully");
      } else {
        console.error("Failed to add movie to favorites");
      }
    } catch (error) {
      console.error("Error while adding favorite:", error);
    }
  };

  return (
    <div>
      {/* Link now points to /search/:movieId */}
      <Link to={`/search/${movieId}`} state={location}>
        <p>{movie.title}</p>
      </Link>
      {toShow && (
        <button type="button" onClick={addFavorite}>
          Add to favorites
        </button>
      )}
    </div>
  );
};

export default Movie;
