'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('RegisterCtrl', function ($scope,Auth,$location, $http, vcRecaptchaService) {
    skrollr.init().destroy();

    $http.get('http://shaastra.org:8001/api/colleges')
        .then(function (response) {
          $scope.allColleges = response.data;
          
        });

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
      $scope.otherCollege = '';
      $scope.field12 = null;
      $scope.submitted=false;
      $scope.field9 = "Male";
      $scope.allStates = ["Andaman and Nicobar Islands", 
  "Andhra Pradesh", 
  "Arunachal Pradesh", 
  "Assam", 
  "Bihar", 
  "Chandigarh", 
  "Chhattisgarh", 
  "Dadra and Nagar Haveli", 
  "Daman and Diu", 
  "Delhi", 
  "Goa", 
  "Gujarat", 
  "Haryana", 
  "Himachal Pradesh", 
  "Jammu and Kashmir", 
  "Jharkhand", 
  "Karnataka", 
  "Kerala", 
  "Lakshadweep", 
  "Madhya Pradesh", 
  "Maharashtra", 
  "Manipur", 
  "Meghalaya", 
  "Mizoram", 
  "Nagaland", 
  "Orissa", 
  "Pondicherry", 
  "Punjab", 
  "Rajasthan", 
  "Sikkim", 
  "Tamil Nadu", 
  "Telangana",
  "Tripura", 
  "Uttaranchal", 
  "Uttar Pradesh", 
  "West Bengal"];

      $scope.printPlease = function(){
        console.log($scope.field12);
      }

      var secretkeycaptcha = '';
      $scope.submit=function(form){
        if(vcRecaptchaService.getResponse() === ""){
          alert("Please resolve the captcha and submit!");
        }else{
          // console.log(vcRecaptchaService.getResponse());

        // $http.post('https://www.google.com/recaptcha/api/siteverify?secret='+ secretkeycaptcha +'&response='+vcRecaptchaService.getResponse()).
        // success(function (data) {
          // if(data.success == true){
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
          college:$scope.field12,
          otherCollege: $scope.otherCollege,
          wantAccomodation:$scope.field15,
         }).then(function(){
        console.log('Successfully Submitted');
        $location.path('/');
         })
          .catch(function(){
            console.log('Error');
          })         ;
        }
        //   }else{
        //     alert("There seems to be a problem. Please try again");
        //     $location.url('/');
        //   }
        // }).
        // error(function (err) {
        //   $location.url('/');
        // })
        

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
    



