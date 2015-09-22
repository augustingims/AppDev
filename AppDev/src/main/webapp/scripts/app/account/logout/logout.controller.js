'use strict';

angular.module('appdemoApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
