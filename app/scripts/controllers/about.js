'use strict';

/**
 * @ngdoc function
 * @name fitAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fitAppApp
 */
angular.module('fitApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
