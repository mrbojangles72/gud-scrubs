angular.module('authFact', [])
    .factory('authFactory', function () {
        var property = false;

        return {
            authCreds: function () {
                return property;
            },
            setProperty: function(value) {
                property = value;
            }
        };
    });
