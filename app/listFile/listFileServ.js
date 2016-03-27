'use strict';

angular.module('myApp.listFileServ', ['ngResource'])

    .factory('listFileServ', ['$resource',
        function ($resource) {
            return {
                getFolderContent: $resource('json/:getFolderContent_id.json', {}, {
                    query: {
                        method: 'GET',
                        params: {phoneId: 'phones'},
                        isArray: false
                    }
                }),
                getRootFolder: $resource('json/getRootFolder.json', {}, {
                    query: {
                        method: 'GET',
                        params: {phoneId: 'phones'},
                        isArray: false
                    }
                })
            };
        }]);
