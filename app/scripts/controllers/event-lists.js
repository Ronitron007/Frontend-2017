'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:EventListsCtrl
 * @description
 * # EventListsCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('EventListsCtrl', function ($scope,$http,$routeParams,$location) {
    skrollr.init().destroy();
    
    var eventId = $routeParams.eventId;
    $scope.eventsJSON = [];
  	$scope.eventLists = [];
    $scope.eventListContent = "";


    $http.get('http://shaastra.org:8001/api/eventLists/events/' + eventId)
  			.then(function (response) {
  				$scope.eventLists = response.data;
          $scope.eventListContent = response.data.info;

          var num = response.data.events.length;
    				for(var i=0; i<num; i++) {
    					if(response.data.events[i].acceptedByAdmin === false) {
    						response.data.events[i].imageURL = 'http://shaastra.org:8001/api/uploads/' + response.data.events[i].imageid + '/' + response.data.events[i].imagename;
    						$scope.eventsJSON.push(response.data.events[i]);
    					}
    				}
    			});

          $scope.gotoEventDetails = function (index) {
      		$location.path('event/' + eventId + '/' + $scope.eventsJSON[index]._id);
      	};



  });
