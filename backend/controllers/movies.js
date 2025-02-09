import createHttpError from "http-errors";
import { getMovies } from "../services/movies.js";

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
