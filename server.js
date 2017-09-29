var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var riddlesRoute = require('./modules/routes/riddlesRoute.js');
var mongoose = require('mongoose');

// middleware
mongoose.connect('mongodb://localhost:27017/RiddleDB');

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/riddles', riddlesRoute);

app.listen(4444, 'localhost', function (req, res) {
  console.log('listening on 4444');
});
