'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:WorkshopsCtrl
 * @description
 * # WorkshopsCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('WorkshopsCtrl', function ($scope, $location) {
  	skrollr.init().destroy();
    $scope.workshopCategories = ["Robotics", "Coding", "Design", "Mechanical", "Miscellaneous", "Electrical and Managerial"];


    $scope.gotoEventDetails = function (index) {
      		$location.path('workshops/' + $scope.workshopCategories[index]);
      	};

  });
