'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('EventsCtrl', function ($scope,$http,$location) {

     $scope.eventList=[];
     $http.get('http://shaastra.org:8001/api/eventLists/events')
     .then(function(response){
     	$scope.eventList=response.data;
    });
      $scope.goto=function(index){
      	$location.path('eventLists/'+$scope.eventList[index]._id);
      }

  });
