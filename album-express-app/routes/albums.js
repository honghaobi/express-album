var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Albums() {
  return knex('albums');
}


router.get('/albums', function(req, res, next) {
  res.render('albums/index');
});

router.get('/albums/new', function(req, res, next) {
  res.render('albums/new');
});

router.post('/albums', function(req, res, next) {
  Albums().insert({ artist: req.body.album_artist, name: req.body.album_name, genre: req.body.album_genre, stars: req.body.album_stars, explicit: req.body.album_explicit}).then(function () {
    res.redirect('/albums');
  });
});

module.exports = router;
