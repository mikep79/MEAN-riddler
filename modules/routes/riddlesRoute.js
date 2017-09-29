var router = require('express').Router();
var Jokes= require('../models/schema');


router.post('/', function (req, res){
    console.log('in riddlesRoute POST', req.body);
    var laugh = new Jokes ({name: req.body.name, setup: req.body.setup, punchline: req.body.punchline})
    console.log('laugh', laugh);
    laugh.save(function(err){
        if(err){
            console.log('oops');
            res.sendStatus(500);
            
        } else {
            console.log('made it');
            res.sendStatus(202);
        }
    });
});

router.get('/', function (req, res){
    Jokes.find({}, function (err, jokeResults) {
        if (err){
            console.log('router get err: ', err);
            res.sendStatus(500);
        } else {
            console.log('jokeResult: ', jokeResults);
            res.send(jokeResults);
        }
    });
});

module.exports = router;