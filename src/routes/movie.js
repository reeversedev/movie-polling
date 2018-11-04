import express from "express";
import Movie from "../models/Movie";

const router = express.Router();

// Getting all movies
router.get("/getMovie", (req, res) => {
  Movie.find({}, (err, movie) => {
    if (err) {
      console.log(err);
    }
    res.json(movie);
  });
});

// Submitting a new movie
router.post("/new", (req, res) => {
  const movie = new Movie({
    _id: req.body.id,
    title: req.body.title,
    release_date: req.body.release,
    actors: req.body.actors,
    director: req.body.directors,
    rating: req.body.rating,
    fan: req.body.fan
  });
  movie.save((err, success) => {
    if (err) {
      res.json(err);
    }
    res.json(success);
  });
});

// Giving thumbs up to movie
router.get("/like", (req, res) => {
  Movie.find({ _id: req.body.id })
    .then(movie => res.json(movie))
    .catch(err => res.json(err));
});

module.exports = router;
