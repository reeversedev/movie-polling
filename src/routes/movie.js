import express from "express";
import Movie from "../models/movie";

const router = express.Router();

router.post("/new", (req, res) => {
  const movie = new Movie({
    id: req.body.id,
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

module.exports = router;
