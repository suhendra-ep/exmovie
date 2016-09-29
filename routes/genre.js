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

// GET BY ID, PUT, DELETE
router.route('/:genreId')
        .get(function(req, res){
            Genre.findById(req.params.genreId, function(err, data){
                if(err)
                    return res.send(500, err);
                return res.json(data);
            });
        })
        .put(function(req, res){
            Genre.findById(req.params.genreId, function(err, genre){
                if(err)
                    return res.send(500, err);
                
                genre.genre = req.body.genre;
                genre.save(function(err, data){
                    if(err)
                        return res.send(500, err);
                    
                    return res.json(data);
                });
            });
        })
        .delete(function(req, res){
            Genre.remove({
                _id : req.params.genreId
            }, function(err, data){
                if(err)
                    return res.send(500, err);
                
                return res.json(data);
            });
        });

module.exports = router;