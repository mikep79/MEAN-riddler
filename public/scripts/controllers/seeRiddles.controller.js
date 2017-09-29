myApp.controller('SeeRiddlesController', ['RiddleService', function (RiddleService){ // inject service
    console.log('see controller working');
    var vm = this;
    vm.jokeObj = RiddleService.riddleObj;
    vm.getRiddles = function(){
        RiddleService.getRiddles();
    };
}]);