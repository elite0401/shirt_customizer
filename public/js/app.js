angular.module('shirtApp', ['ngRoute', 'ngScrollbars', 'appRoutes', 'MainCtrl'])
	.directive('modalDialog', ['AppSettings', DirectiveModal])
	.directive('rangeSpinner', ['AppSettings', DirectiveRangeSpinner])
	.factory('AppSettings', ['$http', AppSettings]);