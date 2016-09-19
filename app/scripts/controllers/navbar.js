'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('NavbarCtrl', function ($scope, Auth, $location) {
  	$scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser;
    
    $scope.logout = function () {
      Auth.logout();
      $location.path('/login');
    };

  });
