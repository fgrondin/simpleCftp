'use strict';

angular.module('myApp.listFileCtrl', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/listFile', {
            templateUrl: 'listFile/listFile.html',
            controller: 'ListFileCtrl'
        });
    }])

    .controller('ListFileCtrl', ['$scope', 'listFileServ', function ($scope, listFileServ) {

        var getRootFolder = function () {
            $scope.files = listFileServ.getRootFolder.query();
        };

       var getFolderContent = function (index) {
           var fileVO = $scope.files.childs[index];
           console.log(fileVO);
            $scope.files = listFileServ.getFolderContent.query({getFolderContent_id: 'getFolderContent_1'});
        }

        $scope.getRootFolder = getRootFolder;
        $scope.getFolderContent = getFolderContent;

        if ($scope.files === undefined) {
            getRootFolder();
        }
    }]);
