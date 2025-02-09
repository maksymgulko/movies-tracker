import { MoviesCollection } from "../schemas/movie.js";

export const getMovies = async () => {
  return await MoviesCollection.find();
};
