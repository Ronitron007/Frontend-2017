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

    toastr.info("Shaastra 2017 will take place from December 31st to January 3rd", "Welcome to Shaastra 2017");
    var homepageNotifs = [
      {
        title: "Workshops",
        desc: "Registrations for robotics, electrical and managerial workshops are open",
        type: "info"
      },
      {
        title: "Shaastra Spotlight",
        desc: "Grab a Shaastra certificate by attending 6 or more Spotlight lectures! Get a chance to win exclusive signed goodies from the speakers!",
        type: "info"
      },
      {
        title: "Shaastra Schedule",
        desc: "Click <a style='color:blue' target='_blank' href='../images/schedule2017-5.pdf'>here</a> to see the schedule for Shaastra 2017",
        type: "success"
      },
      {
        title: "Welcome to Shaastra 2017",
        desc: "Shaastra 2017 will take place from December 31st to January 3rd",
        type: "info"
      }       
    ];

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

