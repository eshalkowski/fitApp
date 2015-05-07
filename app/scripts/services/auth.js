'use strict';

angular.module('fitApp').service('AuthService',[ '$http', '$q', function($http, $q) {
	var token = '';
    this.login = function(params) {
            var deferred = $q.defer();
            var req = {
				 method: 'POST',
				 url: 'http://simplehelps.com/token/',
				 headers: {
				    'Content-Type': 'application/json'
				 },
				 data: { 
				   "x_username" : params.email,
				   "x_password" : params.password 
				}
			};
			$http(req)
			.success(function(data, status, headers, config){
				//TODO: set token when recieved
				console.log(data);
				token = data.token;
				deferred.resolve(data);
			})
			.error(function(data, status, headers, config){
				deferred.reject('An error occured during login. Please try again!');
			});

            return deferred.promise;
        };

        this.getUserDetails = function(){
        	console.log(token);
        	var deferred = $q.defer();
            var req = {
				 method: 'GET',
				 url: 'http://simplehelps.com/api/mydetails/',
				 headers: {
				   'x-auth-token': token
				 }
			};
			$http(req)
			.success(function(data, status, headers, config){
				deferred.resolve(data);
			})
			.error(function(data, status, headers, config){
				deferred.reject('An error occurred retrieving user details');
			});

            return deferred.promise;
        }
        this.register = function(params) {
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

        this.getToken = function(){
        	return token;
        };

}]);