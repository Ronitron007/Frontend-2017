'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:SummitPartnersCtrl
 * @description
 * # SummitPartnersCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('SummitPartnersCtrl', function ($scope) {
    skrollr.init().destroy();
    ;
    $scope.partnersJson=[
    {
    	name:'Accessible India Campaign',
    	info:'A nation-wide campaign started by the Department of Empowerment of Persons with Disability (DEPwD), Government of India, aimed at achieving universal accessibility for Persons with Disabilities (PwDs). The campaign focusses on making physical environments accessible ranging from buildings to transport facilities provided by the government and making information and communication technology accessible for PwDs.',
    	link:'www.accessibleindia.gov.in/content/',
    	logo:'a',
    };




    ];
  });
