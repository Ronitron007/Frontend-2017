'use strict';

/**
 * @ngdoc service
 * @name frontend2017App.fileUpload
 * @description
 * # fileUpload
 * Service in the frontend2017App.
 */
angular.module('frontend2017App')
  .service('fileUpload', ['$http', '$location', function ($http, $location) {
    this.uploadFileToUrl = function(file, uploadUrl, eventId, teamId){
        var fd = new FormData();
        fd.append('file', file, eventId + "-" + teamId);
        fd.append('test', 'test');
        console.log(fd);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
            alert("Successfully Uploaded");
            $location.path("/");
        })
        .error(function(){
            alert("Unsuccessful");
            $location.path("/");
        });
    }
}]);
