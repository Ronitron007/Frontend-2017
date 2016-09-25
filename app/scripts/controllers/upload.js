'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:UploadCtrl
 * @description
 * # UploadCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('UploadCtrl', function ($scope, fileUpload) {
    $scope.uploadFile = function(){
            var file = $scope.myFile;
            console.log('file is ' );
            console.dir(file);
            var uploadUrl = "http://localhost:8080/api/imgs/upload";
            fileUpload.uploadFileToUrl(file, uploadUrl);
    };
  });
