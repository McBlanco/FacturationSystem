'use strict';

var app = angular.module('facturationSystemApp');

app.factory("ProductService", function($http) {
	function list(successCallback, errorCallback) {
		return $http.post("http://ec2-52-90-252-132.compute-1.amazonaws.com:7777/papi/productos/lst", {}).then(
			function (successResponse) {
				successCallback(successResponse.data);
			}, function (errorResponse) {
				errorCallback(errorResponse);
			}
		);
	};
	
	function detail() {
	};
	
	return {};
});