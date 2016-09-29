var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Director = mongoose.model('Director');

// GET ALL, POST
router.route('/')
        .post(function(req, res){
            var director = new Director();
            director.name = req.body.name;

            director.save(function(err, data){
                if(err)
                    return (500, err);
                return res.json(data);
            });
        })
        .get(function(req, res){
            Director.find(function(err, data){
                if(err)
                    return (500, err);
                return res.json(data);
            });
        })

// GET BY ID, PUT, DELETE
router.route('/:directorId')
        .get(function(req, res){
            Director.findById(req.params.directorId, function(err, data){
                if(err)
                    return res.send(500, err);
                return res.json(data);
            });
        })
        .put(function(req, res){
            Director.findById(req.params.directorId, function(err, director){
                if(err)
                    return res.send(500, err);
                
                director.name = req.body.name;
                director.save(function(err, data){
                    if(err)
                        return res.send(500, err);
                    
                    return res.json(data);
                });
            });
        })
        .delete(function(req, res){
            Director.remove({
                _id : req.params.directorId
            }, function(err, data){
                if(err)
                    return res.send(500, err);
                
                return res.json(data);
            });
        });

module.exports = router;