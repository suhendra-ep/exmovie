var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MovieSchema = new Schema({
    title: String,
    releaseYear: String,
    director: String,
    genre: { type : Schema.Types.ObjectId, ref : 'Genre' },
});

mongoose.model('Movie', MovieSchema);

