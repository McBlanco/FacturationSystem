'use strict';

/**
 * @ngdoc function
 * @name facturationSystemApp.controller:SalesControllers
 * @description
 * # MainCtrl
 * Controller of the facturationSystemApp
 */
angular.module('facturationSystemApp')
  .controller('newSaleController', function ($scope) {
    $scope.articles = [
		{ Name: "Escoba de paja", Price: 45 }
	];
  });