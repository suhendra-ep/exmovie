var mongoose = require('mongoose');

var GenreSchema = new mongoose.Schema({
    genre: String,
});

mongoose.model('Genre', GenreSchema);