'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.login',
    'myApp.listFileCtrl',
    'myApp.listFileServ',
]).config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    //$routeProvider.otherwise({redirectTo: '/login'});
    $routeProvider.otherwise({redirectTo: '/listFile'});
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
}]);
