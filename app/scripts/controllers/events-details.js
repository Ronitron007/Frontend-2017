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

    var notifs = [];
    $scope.htmlContent = "";

    $http.get('http://shaastra.org:8001/api/events/showWeb/' + $routeParams.detailsId)
       .then(function (response) {

        response.data.eventTabs.sort(function (a, b) {
          if(a.tabNumber < b.tabNumber) { return -1; }
          if(a.tabNumber > b.tabNumber) { return 1; }
          return 0;
        });


        //marquee
        $scope.marquee = '';
        var numNotifs = response.data.marqueeNotifs.length;
        for(var i=0; i<numNotifs; i++) {
          notifs.push(response.data.marqueeNotifs[i].info);
        }
        var notifHtml = notifs.join(' &emsp; | <span class="dot"></span>&emsp;');
        notifHtml = '<span class="dot"></span>&emsp;' + notifHtml;
        if(numNotifs > 0) {
          $scope.marquee = notifHtml;
        }
        //end marquee

        $scope.eve = response.data;
        $scope.markdownContent = $scope.eve.eventTabs[0].info;
        $scope.htmlContent = $scope.xmark($scope.markdownContent);

       });

    $scope.showInfo = function(index){
      $scope.markdownContent = $scope.eve.eventTabs[index].info;
      $scope.htmlContent = $scope.xmark($scope.markdownContent);
    }

  });
