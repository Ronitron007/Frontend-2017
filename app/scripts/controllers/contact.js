'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('ContactCtrl', function () {
    skrollr.init().destroy();
    this.contents=list;

  });
  var list=[
	{
	Team_Name:"name",
	Email:"xyz@abc.com",
	Phone:"+91 1234567890",
	},
	{
	Team_Name:"name",
	Email:"xyz@abc.com",
	Phone:"+91 1234567890",
	},
	{
	Team_Name:"name",
	Email:"xyz@abc.com",
	Phone:"+91 1234567890",
	},
	{
	Team_Name:"name",
	Email:"xyz@abc.com",
	Phone:"+91 1234567890",
	},
	{
	Team_Name:"name",
	Email:"xyz@abc.com",
	Phone:"+91 1234567890",
	}
	];