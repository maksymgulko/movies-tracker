import express from "express";

const app = express();

export const setupServer = () => {
  app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
  });
};
