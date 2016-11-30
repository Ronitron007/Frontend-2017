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
    var imgURL='http://res.cloudinary.com/shaastra-org/image/upload/v1480440521/shaastra-2017/summit/';
  	$scope.eventList=[
  					{name:'events',img:imgURL+'EVENTS.png'},
  					{name:'speakers',img:imgURL+'SPEAKERS.png'},
  					{name:'registrations',img:imgURL+'REGISTRATION.png'},
  					{name:'partners',img:imgURL+'PARTNERS.png'},
  					{name:'past-versions',img:imgURL+'PAST_VERSIONS.png'},
            {name:'faq',img:imgURL+'FAQ.png'},
  					];
    
                               
    $scope.goto=function(index){
      	$location.path('summit-'+$scope.eventList[index].name);
      }  
  });
