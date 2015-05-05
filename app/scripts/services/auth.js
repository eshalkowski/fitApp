'use strict';

angular.module('fitApp').service('AuthService',[ '$http', '$q', function($http, $q) {
	var token = '';
    this.login = function(params) {
            var deferred = $q.defer();
            var req = {
				 method: 'POST',
				 url: 'http://simplehelps.com/token',
				 headers: {
				   'Content-Type': undefined,
				   'j_username' : 'timmons@unc.edu',
				   'j_password' : 'stripes88'
				 },
				 data: { test: 'test' }
			};
			$http(req)
			.success(function(data, status, headers, config){
				//TODO: set token when recieved
				console.log(data);
				deferred.resolve(data);
			})
			.error(function(data, status, headers, config){
				deferred.reject('An error occured during login. Please try again!');
			});

            return deferred.promise;
        };
        this.login = function(params) {
            var deferred = $q.defer();
            var req = {
				 method: 'POST',
				 url: 'http://simplehelps.com/register',
				 headers: {
				   'Content-Type': undefined,
				 },
				 data: { username: 'test',
				 	     password: 'password',
				 	     firstName: 'tester',
				 	     lastName: 'testing',
				 	     email: 'eat@joes.com' }
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