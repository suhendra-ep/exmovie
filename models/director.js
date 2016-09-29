var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DirectorSchema = new Schema({
    name: String,
});

mongoose.model('Director', DirectorSchema);