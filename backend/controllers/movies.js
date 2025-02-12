import createHttpError from "http-errors";
import { addMovie, getMovies } from "../services/movies.js";

export const getAllMoviesController = async (req, res) => {
  const movies = await getMovies();

  if (!movies) {
    throw createHttpError(404, "Movies not found");
  }

  res.status(200).json({
    status: 200,
    message: "Successfully found movies!",
    data: movies,
  });
};

export const addMovieController = async (req, res) => {
  const payload = req.body;
  const movieData = {
    ...payload,
    tmdbId: payload.id,
  };

  const movie = await addMovie(movieData);

  return res.status(201).json({
    status: 201,
    message: "Movie was added to the favorites",
    data: movie,
  });
};
