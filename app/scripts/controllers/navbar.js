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
      $scope.eventNames=[{name:String,index:Number}];
      $scope.events=response.data;
      for (var i in $scope.events) {
        $scope.eventNames.push({name:$scope.events[i].name,index:i});
      console.log($scope.eventNames[i].name)
      }
    })
    
     
	  

});
