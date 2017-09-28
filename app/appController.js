'use strict';

angular.module('ContactsManager').controller('appController', appController);

init.$inject = ['$rootScope', '$location', '$timeout', 'authentication'];

function init($rootScope, $location, $timeout, authentication) {
    
    if (authentication !== undefined) {
        var authData = authentication.status();
    
        if (authData == null) {
            $timeout(function() {$location.path('/');}, 1);  
        } else {
            $rootScope.loggedIn = true;
            $rootScope.currentUser = authData.uid;
        }
    }
    
}

appController.$inject = ['$scope', '$location', 'authentication'];

function appController($scope, $location, authentication) {
    
    $scope.logout = function() {
        authentication.logout();
    }

    $scope.startSearch = function() {
        $location.path('/');
    };

    $scope.isActive= function(path) {
        return (path == $location.path()) ? 'active' : '';
    };

}

init();
    