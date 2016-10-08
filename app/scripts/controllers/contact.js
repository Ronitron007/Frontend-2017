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
    this.contents1=list1;
 this.contents2=list2;
 this.contents3=list3;

  });
  var list1=[
	
	{
	Person_Name:"Pendse Neil Sanjay",
	Team_Name:"Concept & Design",
	Email:" neil@shaastra.org",
	Phone:"+91 9176283794",
	Person_Name2:"Abhijit S Gupta",
	Email2:" abhijit@shaastra.org",
	Phone2:"+91 9940439339",
	Person_Name3:"Bharath",
	Email3:"ae15d019@smail.iitm.ac.in",
	Phone3:"+91 9940579724",
	Description:"Lorem ipsum asdfasdfasdf sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
	Person_Name:"Adarsh",
	Team_Name:"Events",
	Email:"adarshg@shaastra.org",
	Phone:"+91 9600193202",
	
	Person_Name2:"Suvindu Ch",
	
	Email2:"suvindu@shaastra.org",
	Phone2:"+91 9940248645",
	
	Person_Name3:"Rohit Thakran",
	
	Email3:"7rohitthakran@gmail.com",
	Phone3:"+91 9958515422",
Description:"Lorem ipsum asdfasdfasdf sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
	Person_Name:"M Aghamarshana",
	Team_Name:"Media & Student Relations",
	Email:"aghamarshana@shaastra.org",
	Phone:"+91 8122495355",
	
	Person_Name2:" R Rathna Kumar",
	
	Email2:"rathnakumar@shaastra.org",
	Phone2:"+91 9677081113",
	
	Person_Name3:"Hitesh Singla",
	
	Email3:"hitesh@shaastra.org",
	Phone3:"+91 9677043890",
Description:"Lorem ipsum asdfasdfasdf sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}];
var list2=[	{
	Person_Name:"Ramprashanth",
	Team_Name:"Evolve",
	Email:"ramprashanth@shaastra.org",
	Phone:"+91 8754443260",
	Person_Name2:"Udith Krishna",
	Email2:"udithkrishna@shaastra.org",
	Phone2:"+91 9551113873",
Description:"Lorem ipsum asdfasdfasdf sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},

	{
	Person_Name:"Harshit Dohare",
	Team_Name:"Envisage",
	Email:" harshit.dohare@shaastra.org",
	Phone:"+91 9962879064",
	Person_Name2:"Omkar Vanjpe",
	
	Email2:" omkarkvanjpe@gmail.com",
	Phone2:"+91 7708173059",
Description:"Lorem ipsum asdfasdfasdf sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
	Person_Name:"Krishi Tata",
	Team_Name:"Finance",
	Email:"krishi@shaastra.org",
	Phone:"+91 9003113121",
	Person_Name2:"L Sai Manish",
	
	Email2:"saimanish@shaastra.org",
	Phone2:"+91 7708481881",
Description:"Lorem ipsum asdfasdfasdf sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
	Person_Name:"Raghul Manosh",
	Team_Name:"Sponsorship & PR",
	Email:"raghul@shaastra.org",
	Phone:"+91 9940246479",
	
	Person_Name2:"Varun Srinivas Sridharan",
	
	Email2:"varun@shaastra.org",
	Phone2:"+91 7358540260",
Description:"Lorem ipsum asdfasdfasdf sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},{
	Person_Name:"Mohit Kumar",
	Team_Name:"Technical Operations",
	Email:"mhtkmr54@gmail.com",
	Phone:"+91 9003120598",
	
	Person_Name2:"S.V.Minu Aswanth",
	
	Email2:"minu@shaastra.org",
	Phone2:"+91 9976448668",
Description:"Lorem ipsum asdfasdfasdf sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},{
	Person_Name:"Manish Dhariwal",
	Team_Name:"QMS",
	Email:"manish.dhariwal@shaastra.org",
	Phone:"+91 9884184032",
	
	Person_Name2:"Gunjan",
	
	Email2:"bmsw.gnp@gmail.com",
	Phone2:"+91 7299559744",
Description:"Lorem ipsum asdfasdfasdf sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}];
var list3=[{
	Person_Name:"Nivedita Manepalli",
	Team_Name:"Shows and Exhibitions",
	Email:"nivedita.manepalli@shaastra.org",
	Phone:"+91 9940557095",
Description:"Lorem ipsum asdfasdfasdf sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
{
	Person_Name:"Harshit Saxena",
	Team_Name:"Facilities",
	Email:"harshit@shaastra.org",
	Phone:"+91 9789016167",
Description:"Lorem ipsum asdfasdfasdf sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}
	];
