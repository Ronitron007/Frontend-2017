'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('NavbarCtrl', function ($scope,$http, Auth, $location,$anchorScroll) {
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser;
   
    $scope.logout = function () {
      Auth.logout();
      $location.path('/login');
    };

     $scope.hoverIn = function(){
        this.hoverEdit = true;
    };

    $scope.hoverOut = function(){
        this.hoverEdit = false;
    };

    $http.get('http://shaastra.org:8001/api/events/forSearch')
    .then(function(response){
      $scope.events=response.data;
    })
    
     
	  

});
