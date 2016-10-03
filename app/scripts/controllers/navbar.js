'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('NavbarCtrl', function ($scope, Auth, $location,$anchorScroll) {
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser;
   /* $scope.showDown = true;
    $scope.showUp = false;*/
    $scope.logout = function () {
      Auth.logout();
      $location.path('/login');
    };

    /*$scope.gotoBottom = function() {
      if( $scope.showDown == true)
      {
      $location.hash('d');
      }
      else
      {
      $location.hash('u');
      }
      $anchorScroll();
      $scope.showDown = $scope.showDown ? false : true;
      $scope.showUp = $scope.showUp ? false : true;
    };*/
     
	  

});
