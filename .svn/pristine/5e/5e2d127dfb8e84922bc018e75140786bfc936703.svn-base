'use strict';

angular.module('ContactsManager').controller('addController', addController);
     
addController.$inject = ['$scope', 'contacts'];
       
function addController($scope, contacts) {

    $scope.submit = function() {
        contacts.create($scope.contact);
        $scope.contact = null;
        $scope.added = true;
    };

}
