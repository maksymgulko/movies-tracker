const Movie = ({ movie }) => {
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

  return (
    <div>
      <p>{movie.title}</p>
      <button type="button" onClick={addFavorite}>
        Add to favorites
      </button>
    </div>
  );
};

export default Movie;
