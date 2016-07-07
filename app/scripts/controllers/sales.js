'use strict';

/**
 * @ngdoc function
 * @name facturationSystemApp.controller:SalesControllers
 * @description
 * # MainCtrl
 * Controller of the facturationSystemApp
 */
angular.module('facturationSystemApp')
  .controller('newSaleController', function ($scope, ProductService) {
	  
	$scope.totalPrice = 0.0;
	$scope.selectedArticles = [];	
	$scope.addToSelectedArticles = function(item) {
		$scope.articles.splice($scope.articles.indexOf(item), 1);
		$scope.selectedArticles.push(item);
		$scope.updateTotalPrice();
	};
	$scope.removeFromSelectedArticles = function(item) {
		$scope.articles.push(item);
		$scope.selectedArticles.splice($scope.selectedArticles.indexOf(item), 1);
		$scope.updateTotalPrice();
	};
	$scope.updateTotalPrice = function(item) {
		var totalPrice = 0;
		$scope.selectedArticles.forEach(function(art) { totalPrice += art.precio; });
		$scope.totalPrice = totalPrice;
	};
	$scope.cancel = function() {
		$scope.selectedArticles.forEach(function(art) { $scope.articles.push(art); });
		$scope.selectedArticles = [];
		$scope.updateTotalPrice();
	};
	ProductService.list(function (data) {
			$scope.articles = data;
		}
	);
  });