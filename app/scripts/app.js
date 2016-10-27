
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
    'ngTouch',
    'vcRecaptcha'
  ])
  .config(function ($routeProvider, $locationProvider) {
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
      .when('/event-lists/:eventId', {
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
      .when('/sponsors', {
        templateUrl: 'views/sponsors.html',
        controller: 'SponsorsCtrl',
        controllerAs: 'sponsors'
      })
      .when('/solutions', {
        templateUrl: 'views/solutions.html',
        controller: 'SolutionsCtrl',
        controllerAs: 'solutions'
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
      .when('/summit-partners', {
        templateUrl: 'views/summit-partners.html',
        controller: 'SummitPartnersCtrl',
        controllerAs: 'summitPartners'
      })
      .when('/summit-past-versions', {
        templateUrl: 'views/summit-past-versions.html',
        controller: 'SummitPastVersionsCtrl',
        controllerAs: 'summitPastVersions'
      })
      .when('/summit-registrations', {
        templateUrl: 'views/summit-registrations.html',
        controller: 'SummitRegistrationsCtrl',
        controllerAs: 'summitRegistrations'
      })
      .when('/summit-events', {
        templateUrl: 'views/summit-events.html',
        controller: 'SummitEventsCtrl',
        controllerAs: 'summitEvents'
      })
      .when('/social-campaign', {
        templateUrl: 'views/socialcampaign.html',
        controller: 'SocialcampaignCtrl',
        controllerAs: 'socialCampaign'
      })
      .when('/fellowships', {
        templateUrl: 'views/fellowships.html',
        controller: 'FellowshipsCtrl',
        controllerAs: 'fellowships'
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
      .when('/:eventId/:teamId/upload', {
        templateUrl: 'views/upload.html',
        controller: 'UploadCtrl',
        controllerAs: 'upload'
      })
	     .when('/edit-profile', {
        templateUrl: 'views/edit-profile.html',
        controller: '',
        controllerAs: '',
    
      })
      .when('/forgot-password', {
        templateUrl: 'views/forgot-password.html',
        controller: 'Forgot_PswdCtrl',
        controllerAs: 'forgot_psw',
    
      })
      .when('/reset-password/:token', {
        templateUrl: 'views/reset-password.html',
        controller: 'Reset_PswdCtrl',
        controllerAs: 'reset_psw',
    
      })
     .when('/edit-profile', {
        templateUrl: 'views/edit-profile.html',
        controller: 'edit-profile_PswdCtrl',
        controllerAs: 'edit-profile',
        authenticate: true
      })
      .when('/summit-faq', {
        templateUrl: 'views/summit-faq.html',
        controller: 'SummitFaqCtrl',
        controllerAs: 'summitFaq'
      })
      .otherwise({redirectTo: '/'})
      
      $locationProvider.html5Mode(true);
 

  })

  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.url('/login');
        }
      });

      $rootScope.url = $location.absUrl();

      $rootScope.showBackButton = (next.$$route.originalPath !== '/');
      $rootScope.showLogos = (next.$$route.originalPath === '/');
      $rootScope.showFooter = (next.$$route.originalPath !== '/');
      $rootScope.showBackgroundImage = (next.$$route.originalPath === '/');

    });

    $rootScope.$on('$routeChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.templateUrl == "views/login.html" && loggedIn) {
          $location.url('/dashboard');
        }

        if (next.templateUrl == "views/register.html" && loggedIn) {
          $location.url('/dashboard');
        }
      });

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
          $location.path('/dashboard'); //change to '/'
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
