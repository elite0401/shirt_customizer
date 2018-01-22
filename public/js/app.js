angular.module('shirtApp', ['ngRoute', 'ngScrollbars', 'appRoutes', 'MainCtrl'])
	.directive('modalDialog', ['AppSettings', DirectiveModal])
	.factory('AppSettings', ['$http', AppSettings]);