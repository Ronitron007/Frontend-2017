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

      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard',
        authenticate: true
      })
      .when('/upload', {
        templateUrl: 'views/upload.html',
        controller: 'UploadCtrl',
        controllerAs: 'upload'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.url('/dashboard'); //change to "/login"
        }
      });

      $rootScope.url = $location.absUrl();

      $rootScope.showBackButton = (next.$$route.originalPath !== '/');
      $rootScope.showLogos = (next.$$route.originalPath === '/');
      $rootScope.showFooter = (next.$$route.originalPath !== '/');
      $rootScope.showBackgroundImage = (next.$$route.originalPath === '/');

    });
  })

  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    // $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  });
