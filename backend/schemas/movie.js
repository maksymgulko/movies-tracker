import mongoose, { model, Schema } from "mongoose";

const movieSchema = new Schema(
  {
    tmdbId: {
      type: Number,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    original_title: {
      type: String,
    },
    overview: {
      type: String,
    },
    release_date: {
      type: Date,
    },
    genre_ids: [
      {
        type: String,
      },
    ],
    vote_average: {
      type: Number,
    },
    vote_count: {
      type: Number,
    },
    popularity: {
      type: Number,
    },
    poster_path: {
      type: String,
    },
    backdrop_path: {
      type: String,
    },
    adult: {
      type: Boolean,
      default: false,
    },
    original_language: {
      type: String,
    },
    runtime: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export const MoviesCollection = model("movies", movieSchema);
