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

    var converter = new showdown.Converter();
    $scope.xmark = function (b) {
      return converter.makeHtml(b);
    };

    $scope.htmlContent = "";

    $http.get('http://shaastra.org:8001/api/events/showWeb/' + $routeParams.detailsId)
       .then(function (response) {

        response.data.eventTabs.sort(function (a, b) {
          if(a.tabNumber < b.tabNumber) { return -1; }
          if(a.tabNumber > b.tabNumber) { return 1; }
          return 0;
        });

        $scope.eve = response.data;
        $scope.markdownContent = $scope.eve.eventTabs[0].info;
        $scope.htmlContent = $scope.xmark($scope.markdownContent);

       });

    $scope.showInfo = function(index){
      $scope.markdownContent = $scope.eve.eventTabs[index].info;
      $scope.htmlContent = $scope.xmark($scope.markdownContent);
    }

  });
