import express from "express";
import { getEnvVar } from "./utils/getEnvVar.js";
import moviesRouter from "./routes/movies.js";

const PORT = Number(getEnvVar("PORT", "3000"));

export const setupServer = () => {
  const app = express();

  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("Hello, world");
  });

  app.use(moviesRouter);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
