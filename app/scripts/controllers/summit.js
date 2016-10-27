'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:SummitCtrl
 * @description
 * # SummitCtrl
 * Controller of the frontend2017App
 */

angular.module('frontend2017App')
  .controller('SummitCtrl', function ($scope,$http,$location) {
    skrollr.init().destroy();
    var imgURL='../../images/elements/summit/';
  	$scope.eventList=[
  					{name:'events',img:imgURL+'EVENTS.png'},
  					// {name:'speakers',img:imgURL+''},
  					{name:'registrations',img:imgURL+'REGISTRATION.png'},
  					{name:'partners',img:imgURL+'PARTNERS.png'},
  					{name:'past-versions',img:imgURL+'PAST_VERSIONS.png'},
            {name:'faq',img:'../../images/elements/placeholder.png'},
  					];
    
                               
    $scope.goto=function(index){
      	$location.path('summit-'+$scope.eventList[index].name);
      }  
  });
