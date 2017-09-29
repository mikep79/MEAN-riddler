console.log('JS');

var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/addRiddle.html',
        controller: 'PlusRiddleController as PRC'
    }).when('/viewRiddles', {
        templateUrl: 'views/viewRiddle.html',
        controller: 'SeeRiddlesController as SRC'
    }).otherwise({ redirectTo: '/'});
  });