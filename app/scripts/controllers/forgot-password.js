'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:Forgot_PswdCtrl
 * @description
 * # Forgot_PswdCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('Forgot_PswdCtrl', function ($scope, $http) {
    skrollr.init().destroy();
    
    $scope.message = '';
    $scope.resetEmail = '';

    $scope.forgotPassword = function(form) {
      $scope.submitted = true;
        $scope.message = 'Working...';

      if(form.$valid) {
        $http.post('http://shaastra.org:8001/api/users/forgotPassword', { email: $scope.resetEmail })
          .success(function (message) {
            $scope.message = 'Sent a mail to ' + $scope.resetEmail + ' with further information';
              $scope.resetEmail = '';
          })
          .error(function (message) {
            $scope.message = 'Email does not exist (or) some error has occurred';
              $scope.resetEmail = '';
          });
      } else {
        $scope.message = 'Please enter valid email address';
      }
    };

  });