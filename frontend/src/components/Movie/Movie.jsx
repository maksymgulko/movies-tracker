const Movie = ({ movie }) => {
  // This function sends a POST request to your backend to add the movie to favorites.
  const addFavorite = async () => {
    try {
      const response = await fetch("/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Sending the movie object as the payload.
        body: JSON.stringify(movie),
      });

      if (response.ok) {
        // Optionally update state or notify the user that the movie was favorited.
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
      {/* Connect the onClick event to the addFavorite function */}
      <button type="button" onClick={addFavorite}>
        Add to favorites
      </button>
    </div>
  );
};

export default Movie;
