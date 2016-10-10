'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:Reset_PswdCtrl
 * @description
 * # Reset_PswdCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('Reset_PswdCtrl', function ($scope, $location, $window, $http, $routeParams) {
    
    $scope.message = '';
    $scope.newPassword = '';
    $scope.confirmNewPassword = '';

    $scope.reset = function() {
      $scope.submitted = true;
      $scope.message = 'Working...';

      $http.post('http://shaastra.org:8001/api/users/resetPassword/' + $routeParams.token, { newPassword: $scope.newPassword })
        .success(function (message) {
          $scope.message = '';
          $window.alert('Successfully changed');
          $location.url('/login');
        })
        .error(function (message) {
          $scope.message = 'Your token has been expired (or) is invalid';
          $scope.newPassword = '';
          $scope.confirmNewPassword = '';
        });
    };


  });