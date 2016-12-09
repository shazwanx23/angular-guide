'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$http','$scope',  function($http,$scope) {
	$scope.find = function(user){
		var rawUrl = 'http://maps.googleapis.com/maps/api/geocode/json?address=' + user.location;
		var encoded = encodeURI(rawUrl);
		$scope.location = {};
		$http({
			method: 'GET',
			url: rawUrl
		}).then(function(res){
			$scope.location.latitude = res.data.results[0].geometry.location.lat;
			$scope.location.longitude = res.data.results[0].geometry.location.lng;
		}).catch(function(e){ console.log(e);});
	}
}]);