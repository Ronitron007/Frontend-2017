'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:SolutionsCtrl
 * @description
 * # SolutionsCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('SolutionsCtrl', function () {
    skrollr.init().destroy();

    var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	    acc[i].onclick = function(){
	        this.classList.toggle("active");
	        this.nextElementSibling.classList.toggle("show");
	  }
	}

	$('[data-toggle="tooltip"]').tooltip();

  });
