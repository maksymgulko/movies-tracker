import { useEffect, useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { searchMovieById } from "@/tmdb.js";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state ?? "/search";

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await searchMovieById(movieId);
        setMovie(data);
      } catch (e) {
        console.error(e);
      }
    }

    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to={backLinkHref}>
        <HiArrowLeft size="24" />
      </Link>
      <div>
        <br />
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`${movie.name}`}
        />
        <div>
          <h1>
            {movie.title} ({movie.release_date.substring(0, 4)})
          </h1>
          {"User score: " + Math.round(movie.vote_average * 10) + "%"}
          <h2>Overview</h2>
          {movie.overview}
          <h2>Genres</h2>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={backLinkHref}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={backLinkHref}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
