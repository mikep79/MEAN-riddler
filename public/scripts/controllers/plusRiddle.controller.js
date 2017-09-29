myApp.controller('PlusRiddleController', ['RiddleService', function (RiddleService){ // inject service in array form
    console.log('Plus Riddle controller working');

    var vm = this;

    vm.addRiddle = function(){
        console.log('in add riddle');
        var jokeObj = {
            name: vm.nameIn,
            setup: vm.setup,
            punchline: vm.punchline
        };
        RiddleService.postRiddle(jokeObj)
        // call get function linked to service file with jokeObj as parameter.
    }
}]);
