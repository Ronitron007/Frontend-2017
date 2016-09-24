'use strict';

/**
 * @ngdoc directive
 * @name frontend2017App.directive:fileModel
 * @description
 * # fileModel
 */
angular.module('frontend2017App')
  .directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);
