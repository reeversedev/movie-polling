import mongoose from "mongoose";

const movie = mongoose.Schema({
  id: String,
  title: String,
  release_date: String,
  actors: Array,
  director: Array,
  rating: Number,
  fan: Object
});

module.exports = mongoose.model("Movie", movie);
