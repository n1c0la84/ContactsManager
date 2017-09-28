'use strict';

angular.module('ContactsManager').controller('browseController', browseController);
    
browseController.$inject = ['$scope', '$rootScope', 'contacts'];
    
function browseController($scope, $rootScope, contacts) {

    contacts.init($rootScope.currentUser)
    $scope.contacts = contacts.get();
    $scope.delete = function(contact) {
        contacts.destroy(contact);
    };

 }
