'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('RegisterCtrl', function ($scope,Auth,$location) {
    skrollr.init().destroy();
      $(function(){
  	$('.alphabetic').keydown(function (e){
  		if (e.shiftkey || e.ctrlKey || e.altKey) {
  			e.preventDefault();
  		} else {
  			var key = e.keyCode;
  			if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
  				e.preventDefault();
  			}
  		}
  	});
  });
      $(function(){
      	$('.numeric').keydown(function (e){
      		if (e.shiftKey || e.ctrlKey || e.altKey){
      			e.preventDefault();
      		} else {
      			var key = e.keyCode;
      			if (!((key == 8) || (key == 46) || (key >=35 && key <= 40) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105))){
      				e.preventDefault();
      			}
      		}
      	});
      });

      function validateEmail($email) {
      	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      	return emailReg.test( $email );
      }
      $scope.field11="";
      $scope.college=function(){
        return $scope.field11=='College';
      }
      $scope.match=true;
      $scope.checkPass=function(){
        if($scope.field5==$scope.field4)
        {
              $scope.match=false;
        }
      };
      
      $scope.submitted=false;
      $scope.submit=function(form){
        $scope.submitted=true;
        var gender,school;
        if($scope.field9=="Male")
            gender=true;
        else gender=false;
        if($scope.field11=="College")
            school=false;
        else school=true;
        console.log($scope.field7);
        if(form.$valid){
        Auth.createUser({
          name:$scope.field1,
          secondName:$scope.field2,
          email:$scope.field3,
          password:$scope.field4,
          phoneNumber:$scope.field6,
          city:$scope.field7,
          age:$scope.field8,
          gender:gender,
          state:$scope.field10,
          schoolStudent:school,
          stream:$scope.field13,
          degree:$scope.field14,
          wantAccomodation:$scope.field15,
         }).then(function(){
        console.log('Successfully Submitted');
        $location.path('/');
         })
          .catch(function(){
            console.log('Error');
          })         ;
        }
          };
      

	  // var firstname = document.getElementById('field1').value;
	  // var lastname = document.getElementById('field2').value;
	  // var email = document.getElementById('field3').value;
	  // var pass = document.getElementById('field4').value;
	  // var pass2 = document.getElementById('field5').value;
  
  
	  // var phone = document.getElementById('field6').value;
	  // var city = document.getElementById('field7').value;
	  // var age = document.getElementById('field8').value;
	  // var gender = document.getElementById('field9').value;
	  // var state = document.getElementById('field10').value;
	  // var occupation = document.getElementById('field11').value;
	  // var college = document.getElementById('field12').value;
	  // var stream = document.getElementById('field13').value;
	  // var degree = document.getElementById('field14').value;
	  // var accomodation = document.getElementById('field15').value;

  });
    



