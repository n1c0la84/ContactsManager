'use strict';

angular.module('ContactsManager', ['ngRoute', 'ngResource', 'firebase'])
	   .config(configuration);
	   
configuration.$inject = ['$routeProvider'];
		   
function configuration($routeProvider) {

	$routeProvider.when('/', {
		controller: 'loginController',
		templateUrl: 'views/login.html'
	});
	
	$routeProvider.when('/browse', {
		controller: 'browseController',
		templateUrl: 'views/browse.html'
	});

	$routeProvider.when('/add', {
		controller: 'addController',
		templateUrl: 'views/add.html'
	});
	
	$routeProvider.when('/register', {
		controller: 'registerController',
		templateUrl: 'views/register.html'
	});

};
