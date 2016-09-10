'use strict';

/**
 * @ngdoc overview
 * @name frontend2017App
 * @description
 * # frontend2017App
 *
 * Main module of the application.
 */
angular
  .module('frontend2017App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl',
        controllerAs: 'events'
      })
      .when('/eventLists/:eventId', {
        templateUrl: 'views/event-lists.html',
        controller: 'EventListsCtrl',
        controllerAs: 'eventLists'
      })
      .when('/event/:eventId/:detailsId', {
        templateUrl: 'views/events-details.html',
        controller: 'EventsDetailsCtrl',
        controllerAs: 'eventsDetails'
            })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/exhibitions', {
        templateUrl: 'views/exhibitions.html',
        controller: 'ExhibitionsCtrl',
        controllerAs: 'exhibitions'
      })
      .when('/hospitality', {
        templateUrl: 'views/hospitality.html',
        controller: 'HospitalityCtrl',
        controllerAs: 'hospitality'
      })
      .when('/shows', {
        templateUrl: 'views/shows.html',
        controller: 'ShowsCtrl',
        controllerAs: 'shows'
      })
      .when('/spotlight', {
        templateUrl: 'views/spotlight.html',
        controller: 'SpotlightCtrl',
        controllerAs: 'spotlight'
      })
      .when('/summit', {
        templateUrl: 'views/summit.html',
        controller: 'SummitCtrl',
        controllerAs: 'summit'
      })
      .when('/socialCampaign', {
        templateUrl: 'views/socialcampaign.html',
        controller: 'SocialcampaignCtrl',
        controllerAs: 'socialCampaign'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
