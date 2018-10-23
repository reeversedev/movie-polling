import mongoose from "mongoose";

const movie = mongoose.Schema({
  id: String,
  title: String,
  release_date: Date,
  actors: Array,
  director: Array,
  rating: Number
});

module.exports = mongoose.model("Movie", movie);
