'use strict';

/**
 * @ngdoc function
 * @name fitAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fitApp
 */
angular.module('fitApp')
  .controller('MainCtrl', ['$scope', 'AuthService', function ($scope, AuthService) {

  	$scope.showRegistration = false;

    $scope.toggleRegistration = function(ev){
		$scope.showRegistration = !$scope.showRegistration;
    };

    $scope.login = function(isValid){
      console.log('Login');
      AuthService.login($scope.login);
    };

    $scope.register = function(isValid){
      AuthService.register({});
    };

  }]);
