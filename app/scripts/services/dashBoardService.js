'use strict';

angular.module('fitApp').service('AuthService',[ '$http', '$q','AuthService', function($http, $q, AuthService) {

	var token = AuthService.getToken();

    this.login = function(params) {
            var deferred = $q.defer();
            var req = {
				 method: 'POST',
				 url: 'http://simplehelps.com/getSummaryFitnessData',
				 headers: {
				   'Content-Type': undefined,
				   'x-fit-token' : token
				 },
				 data: { 
				 	startDate: '01/01/01',
				 	endDate: '05/30/15'
				  }
			};
			$http(req)
			.success(function(data, status, headers, config){
				console.log(data);
				deferred.resolve(data);
			})
			.error(function(data, status, headers, config){
				deferred.reject('An error occured during login. Please try again!');
			});

            return deferred.promise;
        };
}]);