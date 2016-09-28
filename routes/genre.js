var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Genre = mongoose.model('Genre');

// Get all genre and Create new genre
router.route('/')
        .post(function(req, res){
            var genre = new Genre();
            genre.genre = req.body.genre;

            genre.save(function(err, data){
                if(err)
                    return (500, err);
                return res.json(data);
            });
        })
        .get(function(req, res){
            Genre.find(function(err, data){
                if(err)
                    return (500, err);
                return res.json(data);
            });
        })

module.exports = router;