import Movie from "../Movie/Movie.jsx";

const MoviesList = ({ toShow, deletable, movies, onDelete }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie._id || movie.tmdbId}>
          <Movie
            toShow={toShow}
            deletable={deletable}
            movie={movie}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
