'use strict';

/**
 * @ngdoc service
 * @name frontend2017App.User
 * @description
 * # User
 * Factory in the frontend2017App.
 */
angular.module('frontend2017App')
  .factory('User', function ($resource) {
    return $resource('http://localhost:8001/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      },
      updateProfile: {
        method: 'PUT',
        params: {
          controller:'updateProfile'
        }
      }
    });
  });
