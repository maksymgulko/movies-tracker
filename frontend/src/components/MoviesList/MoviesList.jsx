import Movie from "../Movie/Movie.jsx";

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.tmdbId}>
          <Movie movie={movie} />
        </li>
      ))}
    </ul>
  );
};
export default MoviesList;
