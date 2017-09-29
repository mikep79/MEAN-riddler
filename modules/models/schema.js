var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jokeSchema = new Schema({
    name: String,
    setup: String,
    punchline: String
})

var Joke = mongoose.model('jokes', jokeSchema);

module.exports = Joke;