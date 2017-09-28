'use strict';

angular.module('ContactsManager').controller('registerController', registerController);
     
registerController.$inject = ['$scope', '$rootScope', '$location', 'authentication', '$timeout'];
       
function registerController($scope, $rootScope, $location, authentication, $timeout) {

    $rootScope.loggedIn = false;

    $scope.submit = function() {
        authentication.register($scope.user, registerCallback);
        
        function registerCallback(error, userData) {
            if (error) {
                console.log("Error creating user:", error);
            } else {
                console.log("Successfully created user account with uid:", userData.uid);
                $rootScope.loggedIn = true;
                $rootScope.user = userData.uid;
                $timeout(function() {$location.path('/browse');}, 1);
            }
	   }
    };
    
}
