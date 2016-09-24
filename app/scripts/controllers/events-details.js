'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:EventsDetailsCtrl
 * @description
 * # EventsDetailsCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('EventsDetailsCtrl', function ($scope,$http,$routeParams) {
    skrollr.init().destroy();

    $scope.Details="";
    $scope.eveDetails="";
    $http.get('http://shaastra.org:8001/api/events/showWeb/' + $routeParams.detailsId)
       .then(function (response) {
         $scope.eveDetails=response.data;
    $scope.Details=$scope.eveDetails.eventTabs[0].info;
       });
    $scope.showInfo = function(index){
        $scope.Details=$scope.eveDetails.eventTabs[index].info;
console.log($scope.Detais);
    }
  });
