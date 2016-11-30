'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('MainCtrl', function ($scope, $interval, notify) {

  	notify.config({startTop: 60, maximumOpen: 1})
    var notificationMessages = [];
  	var count = notificationMessages.length - 1;
  	$scope.notifyFunction = function(){
  		notify({ message: notificationMessages[sessionStorage.notifCount], duration:4000, position: "left"});	
  		sessionStorage.notifCount++;
  	}
  	if(sessionStorage.notifCount == 1){
  		notify({ message: notificationMessages[0], duration:4000, position: "left"});
  	}
  	if(sessionStorage.notifCount < count){
  		$interval($scope.notifyFunction, 4000, count);
  	}
  });

// var myApp = angular.module("myApp", ["sn.skrollr"]);
// myApp.config(["snSkrollrProvider", function(snSkrollrProvider) {
//   snSkrollrProvider.config = { smoothScrolling: true};
// }]);

// // 2. initialise skrollr at runtime
// myApp.run(["snSkrollr", function(snSkrollr) {
//   snSkrollr.init();
// }])

