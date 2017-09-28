'use strict';

angular.module('ContactsManager').controller('loginController', loginController);
     
loginController.$inject = ['$scope', '$rootScope', '$location', 'authentication', '$timeout'];
       
function loginController($scope, $rootScope, $location, authentication, $timeout) {

    $rootScope.loggedIn = false;

    $scope.login = function() {
        authentication.login($scope.user, loginCallback);
        
        function loginCallback(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                $rootScope.loggedIn = true;
                $rootScope.currentUser = authData.uid;
                $timeout(function() {$location.path('/browse');}, 1);  
            }
        }
    };
    
}
