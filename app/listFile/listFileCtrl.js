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
            $scope.rootFolders = listFileServ.getRootFolder.query();
        };

        var getRootFolderContent = function(index) {
            console.log(index);
            var fileVO = $scope.rootFolders.childs[index];
            console.log(fileVO);
            $scope.files = listFileServ.getFolderContent.query({getFolderContent_id: 'getFolderContent_' + index});
        }

        var getFolderContent = function (index) {
            var fileVO = $scope.files.childs[index];
            console.log(fileVO);
            $scope.files = listFileServ.getFolderContent.query({getFolderContent_id: 'getFolderContent_' + index});
        }

        $scope.getRootFolder = getRootFolder;
        $scope.getFolderContent = getFolderContent;
        $scope.getRootFolderContent = getRootFolderContent;

        if ($scope.rootFolders === undefined) {
            getRootFolder();
        }
    }]);
