 'use strict';

angular.module('appdemoApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-appdemoApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-appdemoApp-params')});
                }
                return response;
            },
        };
    });