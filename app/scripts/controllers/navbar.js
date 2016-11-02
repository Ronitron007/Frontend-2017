'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('NavbarCtrl', function ($scope,$routeParams,$http, Auth, $location,$anchorScroll) {
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser;
    
    var eventId = $routeParams.eventId;
    $scope.eventsJSON = [];
    
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


      
    // $http.get('http://shaastra.org:8001/api/eventLists/events/' + eventId)
    //     .then(function (response) {
    //       $scope.eventLists = response.data;
    //       $scope.eventListContent = response.data.info;

    //       if(((response.data.events.length)%2) === 0){
    //         $scope.normal = true;
    //       }

    //       else{
    //         $scope.normal = false;
    //       }
          
    //       $scope.eventLists.title = $scope.eventLists.title.split(" ").join("-");

    //       var num = response.data.events.length;
    //         for(var i=0; i<num; i++) {
    //           if(response.data.events[i].acceptedByAdmin === false) {
    //             response.data.events[i].imageURL = 'http://shaastra.org:8001/api/uploads/' + response.data.events[i].imageid + '/' + response.data.events[i].imagename;
    //             $scope.eventsJSON.push(response.data.events[i]);
    //           }
    //         }
    //       });
  
  $http.get('http://shaastra.org:8001/api/events/forSearch')
    .then(function(response){
      $scope.eventNames=[{name:String,index:Number}];
      $scope.eventIds=[];
      $scope.events=response.data;
      for (var i in $scope.events) {
        $scope.eventNames.push({name:$scope.events[i].name,index:i});
        $scope.eventIds.push($scope.events[i]._id);

    }
  });
    
     
	  

});
