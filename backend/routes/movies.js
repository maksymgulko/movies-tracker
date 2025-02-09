import { Router } from "express";
import { getAllMoviesController } from "../controllers/movies.js";

const router = Router();

router.get("/movies", getAllMoviesController);

export default router;
