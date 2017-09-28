'use strict';

angular.module('ContactsManager').factory('contacts', contacts);

contacts.$inject = ['$resource', '$firebaseArray'];

function contacts($resource, $firebaseArray) {
	var baseUrl = 'https://blinding-inferno-3999.firebaseio.com/';
	var firebase = null; var contacts = null;

	return {
		init: function(user) {
			firebase = new Firebase(baseUrl + user);
			contacts = $firebaseArray(firebase);
		},
		get: function() {
			return contacts;
		},
		create: function(contact) {
			contacts.$add(contact);
		},
		destroy: function(contact) {
			contacts.$remove(contact);
		}
	};
}
