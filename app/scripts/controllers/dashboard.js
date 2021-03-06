'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('DashboardCtrl', function ($scope, $http, Auth, $location, $sce) {
    skrollr.init().destroy();
		$scope.i = 0;
    $scope.payingAmount = 1;
		$scope.data = function (ch) {
    	$scope.i = ch;
    };

    Auth.isLoggedInAsync(function (loggedIn) {
    	$scope.user = Auth.getCurrentUser();
      $scope.paymentHistory = $scope.user.paymentDetails;
      console.log($scope.paymentHistory);
    });

    $scope.currentDate = new Date(Date.now());

    $scope.teamBlockMessage = '';
    $scope.teamCreateMessage = '';
    $scope.eventUnRegisterMessage = '';
    $scope.eventRegisterMessage = '';
    // $scope.eventsRgistered = [];
    $scope.all_events = [];
    $scope.all_teams = [];
    $scope.teamsCreated = [];
    $scope.teamRequire = "";
    $scope.singleMember = false;
    $scope.showDate = false;
    $scope.eventDate = null;
    $scope.sortedTeams = [];
    $scope.teamName = "";
    $scope.teamSelected = '';
    $scope.eventSelected = '';
    $scope.disableRegisterEvent = false;
    $scope.disableDeleteTeam = false;
    $scope.disableCreateTeam = false;
    $scope.disableUnregisterEvent = false;

    
    //paytm credentials
    $scope.payAmount = function(){
      $scope.paytmCredentials = {
        ORDER_ID: "" + Math.round((new Date()).getTime() / 1000) + "" + Math.random().toString(36).substring(7),
        CUST_ID: $scope.user.festID,
        TXN_AMOUNT: $scope.payingAmount
      };

      $http.post("http://shaastra.org:8001/api/colleges/generateCheckSum/" + $scope.user._id, $scope.paytmCredentials).then(function(response){
        console.log(response);
        $scope.htmlRendered = $sce.trustAsHtml(response.data);
        // $location.url('/paymentPage');
        // $http.post("https://pguat.paytm.com/oltp-web/processTransaction", response).then(function(response1){
        //   console.log(response1);
        // });
      });

    }

    // $http.get('http://shaastra.org:8001/api/events')
    $http.get('http://shaastra.org:8001/api/events')
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

		$http.get('http://shaastra.org:8001/api/teams')
      .then(function (response) {
        var numTeams = response.data.length;
        var numTeamEvents = 0;
        for(var i=0; i<numTeams; i++) {
          if(response.data[i].selfTeam===true) {
            response.data[i].teamName += ' - Individual Participation';
          }
          numTeamEvents = response.data[i].eventsRegistered.length;
          for(var j=0; j<numTeamEvents; j++) {
            response.data[i].eventsRegistered[j].startReg = new Date(response.data[i].eventsRegistered[j].startReg);
            response.data[i].eventsRegistered[j].endReg = new Date(response.data[i].eventsRegistered[j].endReg);
          }
        }
        $scope.all_teams = response.data;

      });

      

      $scope.goto = function(link) {
        $location.path(link);
      };

      $scope.registerEvent = function() {
        $scope.disableRegisterEvent = true;
        if($scope.eventSelected !== '' && ($scope.teamSelected !== '' || $scope.singleMember === true)) {
          $scope.eventRegisterMessage = ' -- Working...';
      		var currentEvent = JSON.parse($scope.eventSelected);
          var currentTeam = {};
          if($scope.singleMember === false) {
      		  currentTeam = JSON.parse($scope.teamSelected);
          } else {
            currentTeam = $scope.user.selfTeam;
          }
      		var sendBody = {
      			eventRegistered: currentEvent._id,
      			team: currentTeam._id
      		};
          console.log(sendBody);
      		$http.post('http://shaastra.org:8001/api/teams/registerEvent', sendBody)
      			.then(function (response) {
              if(response.status === 200) {
                alert("You have successfully registered for this event");
                $location.url("/");
      				}
              else if(response.status === 204){
                alert("You have already registered for this event");
                $location.url("/");
              }
      			});
      	} else {
          $scope.disableRegisterEvent = false;
          alert("Please select a team and an event");
        } 
      };

      $scope.unregisterEvent = function (team, event, eventIndex, teamIndex) {
        $scope.disableUnregisterEvent = true;
        var result = confirm("Are you sure you want to Unregister? Only team-leader can unregister to an event and this action cannot be undone!");
        if(result) {
          $scope.eventUnRegisterMessage = ' -- Working...';
          $http.delete('http://shaastra.org:8001/api/teams/' + team._id + '/' + event._id)
            .then(function (response) {
              if(response.status === 200) {
                alert("Successfully unregistered for the event");
                $location.url("/");
              } else {
                alert("Some error occured. Please try again");
                $location.url("/");
              }
            });
        }
      };

      $scope.showTeamRequire = function() {
        $scope.sortedTeams = [];
      	$scope.showDate = true;
      	var currentEvent = JSON.parse($scope.eventSelected);

        var numTeams = $scope.all_teams.length;
        for(var i=0; i<numTeams; i++) {
          if($scope.all_teams[i].teamMembers.length >= currentEvent.minTeamMembers && $scope.all_teams[i].teamMembers.length <= currentEvent.maxTeamMembers) {
            $scope.sortedTeams.push($scope.all_teams[i]);
          }
        }

      	$scope.eventDate = currentEvent.eventDate;
      	if(currentEvent.maxTeamMembers !== 1) {
      		$scope.teamRequire = currentEvent.minTeamMembers + " - " + currentEvent.maxTeamMembers+ " members";
      		$scope.singleMember = false;
      	}
      	else {
      		$scope.teamRequire = "Individual Registration";
      		$scope.singleMember = true;
      	}
      };

    	$scope.membersAdded = "You";
    	$scope.newTeamMember = "";
    	$scope.members_Added = [];

    	$scope.addTeamMember = function() {
    		if($scope.newTeamMember !== "" && $scope.user.festID !== $scope.newTeamMember.toUpperCase()) {
    			$scope.membersAdded = $scope.membersAdded + " , " + $scope.newTeamMember ;
    			$scope.members_Added.push($scope.newTeamMember);
    			$scope.newTeamMember = "";
    		} else {
          $scope.newTeamMember = "";
        }
    	};
    	$scope.createNewTeam = function() {
        $scope.disableCreateTeam = true;
       if($scope.teamName !== '' && $scope.members_Added.length !== 0) {
    		$scope.teamCreateMessage = " -- Working...";
    		$http.post('http://shaastra.org:8001/api/teams', {
    			teamMembers: $scope.members_Added,
    			teamName: $scope.teamName
    		})
  			.then(function (response){
	  			if(response.status === 201) {
            $scope.disableCreateTeam = false;
   					$scope.teamName = "";
    				$scope.members_Added = [];
    				$scope.newTeamMember = "";
   					$scope.membersAdded = "You";
   					$scope.teamCreateMessage = '';
   					$scope.all_teams.push(response.data);
	  			} else {
            $scope.disableCreateTeam = false;
	  				$scope.teamCreateMessage = 'Some error occurred!';
	  			}
  			});
       } else {
          $scope.disableCreateTeam = false;
          alert("Please select a team name and add members"); 
       }
    	};

	$scope.leaveTeam = function (index) {
    $scope.disableDeleteTeam = true;
    var result = confirm("Are you sure you want to Leave Team? This action cannot be undone!");
    if(result) {
  		$scope.teamBlockMessage = ' -- Working...';
  		var teamId = $scope.all_teams[index]._id;
  		$http.post('http://shaastra.org:8001/api/teams/leave/'+ teamId)
  		  .then(function (response) {
    			if(response.status === 200) {
            $scope.disableDeleteTeam = false;
    				$scope.teamBlockMessage = '';
    				$scope.all_teams.splice(index, 1);
    			} else {
            $scope.disableDeleteTeam = false;
    				$scope.teamBlockMessage = 'Some error occurred!';
    			}
    		});
    }
	};

  $scope.uploadTDP = function(eventId, teamId){
    console.log(eventId + " " + teamId);
    $location.url(eventId + "/" + teamId + "/upload");
  }

  $scope.deleteTeam = function (index) {
    $scope.disableDeleteTeam = true;
    var result = confirm("Are you sure you want to Delete Team? Only team-leader can delete the team and this action cannot be undone!");
    if(result) {
      $scope.teamBlockMessage = ' -- Working...';
      var teamId = $scope.all_teams[index]._id;
      $http.delete('http://shaastra.org:8001/api/teams/' + teamId)
        .then(function (response) {
          if(response.status === 204) {
            alert("Successfully removed the team");
            $location.url("/");
          } else if(response.status === 403) {
            alert("Only the team leader can remove the team");
            $location.url("/");
          } else{
            alert("Some error occured while removing the team");
            $location.url("/");
          }
        });
    }
  };

});