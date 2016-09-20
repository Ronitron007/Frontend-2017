'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('DashboardCtrl', function ($scope, $http, Auth, $location) {
    skrollr.init().destroy();
    $scope.i = 0;
		$scope.data = function (ch) {
    	$scope.i = ch;
    };

     Auth.isLoggedInAsync(function (loggedIn) {
    	$scope.user = Auth.getCurrentUser();
    });

 		$scope.currentDate = new Date(Date.now());
 		$scope.all_events = [];
 		$scope.teamName = "";
    	$scope.eventDate = null;
 		$scope.disableCreateTeam = false;
		$http.get('http://shaastra.org:8001/api/events/')
      	.then(function (response) {
        var numEvents = response.data.length;
        for(var i=0; i<numEvents; i++) {
          if(response.data[i].isEvent && !response.data[i].isWorkshop) {
            response.data[i].name = 'Event | ' + response.data[i].name;
          }
          if(!response.data[i].isEvent && response.data[i].isWorkshop) {
            response.data[i].name = 'Workshop | ' + response.data[i].name;
          }
        }
      	response.data.sort(function (a, b) {
					if(a.name < b.name) { return -1; }
					if(a.name > b.name) { return 1; }
					return 0;
      	});
        $scope.all_events = response.data;
      	});
            $scope.goto = function(link) {
        $location.path(link);
      	};
      	$scope.createNewTeam = function() {
        $scope.disableCreateTeam = true;
       	if($scope.teamName !== '') {
    		$http.post('http://shaastra.org:8001/api/teams', {
    			teamName: $scope.teamName
    		})

    		.then(function (response){
	  			if(response.status === 201) {
            $scope.disableCreateTeam = false;
   					$scope.teamName = "";
   					$scope.all_teams.push(response.data);
	  			} else {
            $scope.disableCreateTeam = false;
	  				$scope.teamCreateMessage = 'Some error occurred!';
	  			}
  			});
       } else {
          $scope.disableCreateTeam = false;
          alert("Please select a team name"); 
       }
    	};


  });
