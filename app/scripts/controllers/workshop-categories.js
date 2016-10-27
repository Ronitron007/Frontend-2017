'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:WorkshopCategoriesCtrl
 * @description
 * # WorkshopCategoriesCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('WorkshopCategoriesCtrl', function ($scope,$http,$location,$routeParams) {
    skrollr.init().destroy();
    
    var workshopCat = $routeParams.workshopCat;
    console.log(workshopCat);
    $scope.eventsJSON = [];
  	$scope.eventLists = [];
    $scope.eventListContent = "";
    $scope.normal = true;

	this.links=list;
    $http.get('http://shaastra.org:8001/api/events/workshops/' + workshopCat)
  			.then(function (response) {
  				console.log(response.data);
  				$scope.eventLists = response.data;
          $scope.eventListContent = response.data.info;

          if(((response.data.length)%2) === 0){
            $scope.normal = true;
          }

          else{
            $scope.normal = false;
          }
          

          var num = response.data.length;
    				for(var i=0; i<num; i++) {
    					if(response.data[i].acceptedByAdmin === false) {
    						response.data[i].imageURL = 'http://shaastra.org:8001/api/uploads/' + response.data[i].imageid + '/' + response.data[i].imagename;
    						$scope.eventsJSON.push(response.data[i]);
    					}
    				}
    			});



          $scope.gotoEventDetails = function (index) {
      		$location.path('event/57e29fa4a65edf661ac45204/' + $scope.eventsJSON[index]._id);
      	}
  });
