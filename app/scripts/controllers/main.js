'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('MainCtrl', function ($scope, $interval, toastr) {

    toastr.info("Thank you for attending Shaastra 2017. We hope to see you again next year", "Thank you");
    var homepageNotifs = [];

    var notifCounter = 0;
    var numNotifs = homepageNotifs.length;

    function changeNotif() {
      toastr[homepageNotifs[notifCounter].type](homepageNotifs[notifCounter].desc, homepageNotifs[notifCounter].title);
      notifCounter += 1;
      if(notifCounter === numNotifs) {
        notifCounter = 0;
      }
    }
    $interval(changeNotif, 7000);


    //Notifications ready, use when needed
  	// notify.config({startTop: 60, maximumOpen: 1})
   //  var notificationMessages = ["Hello", "Hi"];
  	// var count = notificationMessages.length - 1;
   //  console.log(sessionStorage.notifCount);
    // notify("Hello");
    // notify({ message: "Hello", duration:4000, position: "left"}); 
  	// $scope.notifyFunction = function(){
  	// 	notify({ message: notificationMessages[sessionStorage.notifCount], duration:4000, position: "left"});	
  	// 	sessionStorage.notifCount++;
  	// }
  	// if(sessionStorage.notifCount == 1){
  	// 	notify({ message: notificationMessages[0], duration:4000, position: "left"});
  	// }
  	// if(sessionStorage.notifCount < count){
  	// 	$interval($scope.notifyFunction, 4000, count);
  	// }
  });

// var myApp = angular.module("myApp", ["sn.skrollr"]);
// myApp.config(["snSkrollrProvider", function(snSkrollrProvider) {
//   snSkrollrProvider.config = { smoothScrolling: true};
// }]);

// // 2. initialise skrollr at runtime
// myApp.run(["snSkrollr", function(snSkrollr) {
//   snSkrollr.init();
// }])

