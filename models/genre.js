var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GenreSchema = new Schema({
    genre: String,
});

mongoose.model('Genre', GenreSchema);