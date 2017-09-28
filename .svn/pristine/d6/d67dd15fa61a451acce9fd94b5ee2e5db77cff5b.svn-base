'use strict';

angular.module('ContactsManager').factory('authentication', authentication);

authentication.$inject = ['$resource', '$firebaseAuth'];

function authentication($resource, $firebaseAuth) {
	var firebase = new Firebase('https://blinding-inferno-3999.firebaseio.com');
	
	return {
		status: function() {
			return firebase.getAuth();
		},
		login: function(user, callback) {
			firebase.authWithPassword({email: user.email, password: user.password}, callback);
		},
		register: function(user, callback) {
			firebase.createUser({email: user.email, password: user.password}, callback);
		},
		logout: function() {
			firebase.unauth();
		}
	};
}
