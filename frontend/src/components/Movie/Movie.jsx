import { Link, useLocation } from "react-router-dom";

const Movie = ({ toShow, deletable, movie, onDelete }) => {
  const location = useLocation();
  // For linking to details, we use movie.id (if available) or movie.tmdbId.
  const detailsId = movie.id || movie.tmdbId;

  const addFavorite = async () => {
    try {
      const response = await fetch("/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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

  const deleteFavorite = async () => {
    try {
      // We assume that the movie object includes the Mongo _id field.
      const movieId = movie._id;
      const response = await fetch(`/movies/${movieId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Movie removed from favorites successfully");
        // Inform parent component so it can update its state.
        if (onDelete) onDelete(movieId);
      } else {
        console.error("Failed to remove movie");
      }
    } catch (error) {
      console.error("Error while removing movie:", error);
    }
  };

  return (
    <div>
      <Link to={`/search/${detailsId}`} state={location}>
        <p>{movie.title}</p>
      </Link>
      {toShow && (
        <button type="button" onClick={addFavorite}>
          Add to favorites
        </button>
      )}
      {deletable && (
        <button type="button" onClick={deleteFavorite}>
          Delete from favorites
        </button>
      )}
    </div>
  );
};

export default Movie;
