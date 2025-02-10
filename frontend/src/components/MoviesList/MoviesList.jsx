import Movie from "../Movie/Movie.jsx";

const MoviesList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <ul key={movie.id}>
          <li>
            <Movie movie={movie} />
          </li>
        </ul>
      ))}
    </div>
  );
};
export default MoviesList;
