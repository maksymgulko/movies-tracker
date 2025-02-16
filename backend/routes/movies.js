import { Router } from "express";
import {
  addMovieController,
  deleteMovieController,
  getAllMoviesController,
} from "../controllers/movies.js";

const router = Router();

router.get("/movies", getAllMoviesController);

router.post("/movies", addMovieController);

router.delete("/movies/:movieId", deleteMovieController);

export default router;
