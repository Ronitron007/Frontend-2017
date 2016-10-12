'use strict';
/**
 * @ngdoc function
 * @name frontend2017App.controller:edit-profile_PswdCtrl
 * @description
 * # edit-profile_PswdCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('edit-profile_PswdCtrl', function ($scope, $http, Auth, $location) {
    
 $scope.pageClass = 'page-editProfile';
  $scope.message = '';

    Auth.isLoggedInAsync(function (loggedIn) {
      $scope.user = Auth.getCurrentUser();
    });

    
    $scope.states =["Andaman and Nicobar Islands", 
  "Andhra Pradesh", 
  "Arunachal Pradesh", 
  "Assam", 
  "Bihar", 
  "Chandigarh", 
  "Chhattisgarh", 
  "Dadra and Nagar Haveli", 
  "Daman and Diu", 
  "Delhi", 
  "Goa", 
  "Gujarat", 
  "Haryana", 
  "Himachal Pradesh", 
  "Jammu and Kashmir", 
  "Jharkhand", 
  "Karnataka", 
  "Kerala", 
  "Lakshadweep", 
  "Madhya Pradesh", 
  "Maharashtra", 
  "Manipur", 
  "Meghalaya", 
  "Mizoram", 
  "Nagaland", 
  "Orissa", 
  "Pondicherry", 
  "Punjab", 
  "Rajasthan", 
  "Sikkim", 
  "Tamil Nadu", 
  "Telangana",
  "Tripura", 
  "Uttaranchal", 
  "Uttar Pradesh", 
  "West Bengal"];

    $scope.updateProfile = function(form) {
      $scope.submitted = true;
      $scope.message = 'Working...';

      if(form.$valid) {
        Auth.updateProfile({
          name: $scope.user.name,
          secondName: $scope.user.secondName,
          email: $scope.user.email,
          phoneNumber: $scope.user.phoneNumber,
          city: $scope.user.city,
          state: $scope.user.state,
          wantAccomodation: $scope.user.wantAccomodation
        })
        .then( function (response) {
          if(response.$resolved && response.$promise.$$state.status) {
            $scope.message = 'Success';
            $scope.submitted = false;
            alert("Successfully changed");
            $location.url("/dashboard");
          } else {
            $scope.message = 'Some error occurred! Please try again.';
            $scope.submitted = false;
            alert("Some error occurred! Please try again.");
            $location.url("/dashboard");            
          }
        })
        .catch( function (err) {
          $scope.submitted = false;            

          err = err.data;
          $scope.errors = {};

          console.log(err);
          
        });
      }
    };

  });   














   