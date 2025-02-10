import { Router } from "express";
import {
  addMovieController,
  getAllMoviesController,
} from "../controllers/movies.js";

const router = Router();

router.get("/movies", getAllMoviesController);

router.post("/movies", addMovieController);

export default router;
