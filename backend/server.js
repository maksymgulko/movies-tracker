import express from "express";
import { getEnvVar } from "./utils/getEnvVar.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";

const PORT = Number(getEnvVar("PORT", "3001"));

export const setupServer = () => {
  const app = express();

  app.use(express.json());

  app.use(cookieParser());

  app.get("/", (req, res) => {
    res.send("Hello, world");
  });

  app.use(router);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
