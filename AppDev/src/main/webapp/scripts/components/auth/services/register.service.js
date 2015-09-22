'use strict';

angular.module('appdemoApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


