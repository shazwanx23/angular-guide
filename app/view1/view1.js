'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'User',   function($scope, User) {
	$scope.something = "something";
	$scope.user = User.getUser();
	console.log($scope.user);
	User.getGeocode().then(function(response){
		$scope.address = response.data.results;
	}, function(e) {console.log(e);});
}]);