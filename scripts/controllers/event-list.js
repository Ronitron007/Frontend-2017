'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:HospitalityCtrl
 * @description
 * # HospitalityCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('EventsListCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


  });

  var eventId=$routeParams.eventId;