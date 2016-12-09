angular.module('myApp.service', [])
.factory('User', ['$http', function($http){
	var service = this;
	var user = "some user";
	service.getUser = function(){ return user;}
	service.getGeocode = function(){
		return $http({
			method: 'GET',
			url: 'http://maps.googleapis.com/maps/api/geocode/json?address=bukit%20jalil'
		});
	};
	service.getLocation = function(user.location){
		var rawUrl = 'http://maps.googleapis.com/maps/api/geocode/json?address=' + user.location;
		var encoded = encodeURI(rawUrl);
		$scope.location = {};
		return $http({
			method: 'GET',
			url: encoded
		})
	}
	return service;
}]);