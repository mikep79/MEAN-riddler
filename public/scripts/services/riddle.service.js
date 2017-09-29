myApp.service('RiddleService', function ($http) {
    var self = this;
    console.log("are we working");

    // empty array to hold joke data from server for get req in obj form.

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
    // post req using joke object from plusRiddle.controller
});