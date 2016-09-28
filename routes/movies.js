var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Movie = mongoose.model('Movie');

// Get all Movie and Create new movie
router.route('/')
        .post(function(req, res){
            var movie = new Movie();
            movie.title = req.body.title;
            movie.releaseYear = req.body.releaseYear;
            movie.director = req.body.director;
            movie.genre = req.body.genre;

            movie.save(function(err, data){
                if(err)
                    return (500, err);
                console.log(data._id);
                Movie
                    .findOne({_id: data._id})
                    .populate({path: 'genre'})
                    .exec(function(err, result){
                        if(err)
                            return res.send(500, err);
                        return res.json(result);
                    });
            });
        })
        .get(function(req, res){
            Movie.find(function(err, data){
                if(err)
                    return (500, err);
                return res.json(data);
            });
        })

router.route('/:movieId')
        .get(function(req, res){
            Movie.findById(req.params.movieId, function(err, data){
                if(err)
                    return res.send(500, err);
                return res.json(data);
            });
        })
        .put(function(req, res){
            Movie.findById(req.params.movieId, function(err, movie){
                if(err)
                    return res.send(500, err);
                
                movie.title = req.body.title;
                movie.releaseYear = req.body.releaseYear;
                movie.director = req.body.director;
                movie.genre = req.body.genre;

                movie.save(function(err, data){
                    if(err)
                        return res.send(500, err);
                    
                    return res.json(data);
                });
            });
        })
        .delete(function(req, res){
            Movie.remove({
                _id : req.params.movieId
            }, function(err, data){
                if(err)
                    return res.send(500, err);
                
                return res.json(data);
            });
        })

module.exports = router;