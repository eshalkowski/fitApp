'use strict';

/**
 * @ngdoc overview
 * @name fitAppApp
 * @description
 * # fitAppApp
 *
 * Main module of the application.
 */
angular
  .module('fitApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'highcharts-ng'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashBoard.html',
        controller: 'DashBoardCtrl'
      })
      .when('/day', {
        templateUrl: 'views/day.html',
        controller: 'DayCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
