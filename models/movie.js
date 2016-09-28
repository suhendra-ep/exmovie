var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
    title: String,
    releaseYear: String,
    director: String,
    genre: String,
});

mongoose.model('Movie', MovieSchema);

