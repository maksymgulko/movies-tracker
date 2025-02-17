import { Router } from "express";
import {
  addMovieController,
  deleteMovieController,
  getAllMoviesController,
} from "../controllers/movies.js";

const router = Router();

router.get("/", getAllMoviesController);

router.post("/", addMovieController);

router.delete("/:movieId", deleteMovieController);

export default router;
