'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('LoginCtrl', function ($scope, Auth, $http, $location) {
    skrollr.init().destroy();

    $scope.loginUser = function () {
        Auth.login({
            email: $scope.username,
            password: $scope.password
        })
        .then( function() {
            // Logged in, redirect to home
            $location.path('/dashboard');
            //console.log("Hello");
            // $http.get('http://localhost.org:8001/api/users/me')
            // .then(function (response) {
            //     console.log(response.data);
            // });
        })
        .catch( function (err) {
            alert('Please enter correct credentials');
            // console.log(err);
            $location.path('/login');
            // $scope.errors.other = err.message;
        });
    };
    
  });
