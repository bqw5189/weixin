angular.module('home.controllers', [])

.controller('HomeCtrl', function($scope,AppConfig) {
	$scope.headerStyle=AppConfig.style.header;
	$scope.tabStyle=AppConfig.style.tab;
});
