import { MoviesCollection } from "../schemas/movie.js";

export const getMovies = async () => {
  return await MoviesCollection.find();
};

export const addMovie = async (payload) => {
  const movie = MoviesCollection.create(payload);
  return movie;
};

export const deleteMovie = async (movieId) => {
  const movie = await MoviesCollection.findOneAndDelete({
    _id: movieId,
  });
  return movie;
};
