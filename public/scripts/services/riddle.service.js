myApp.service('RiddleService', function ($http) {
    var self = this;
    console.log("are we working");

    self.riddleObj = {
        joke: []
    };

    self.postRiddle = function (newRiddle) {
        console.log('in service:', newRiddle);
        $http({
            method: 'POST',
            url: '/riddles',
            data: newRiddle
        }).then (function (response){
            console.log('in service POST with', response);
        })
    }; // testing some BS
    self.getRiddles = function() {
        $http({
            method: 'GET',
            url: '/riddles'
        }).then(function(response){
            console.log('GET req response: ', response.data);
            self.riddleObj.joke = response.data;
        });
    };
    // post req using joke object from plusRiddle.controller
});