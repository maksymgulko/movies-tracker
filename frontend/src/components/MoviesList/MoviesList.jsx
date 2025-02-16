import Movie from "../Movie/Movie.jsx";

const MoviesList = ({ toShow, movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.tmdbId}>
          <Movie toShow={toShow} movie={movie} />
        </li>
      ))}
    </ul>
  );
};
export default MoviesList;
