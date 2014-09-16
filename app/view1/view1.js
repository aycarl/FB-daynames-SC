'use strict';



angular.module('myApp.view1', ['ngRoute'])


.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])



.controller('View1Ctrl', function($scope) {
	$scope.birthdaytext = "01/01/2000";

	$scope.date = function() {

		$scope.daynumber = angular.copy(new Date($scope.birthdaytext).getDay());

	};

	$scope.getDN = function(){
		if($scope.gender=="male"){
			$scope.resultname = $scope.dnmale[$scope.daynumber];
		}
		else{
			$scope.resultname = $scope.dnfemale[$scope.daynumber];
		}
		console.log($scope.resultname)
	}

	$scope.getday = function(){
		$scope.date();
		$scope.d = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		//$scope.getday = $scope.d[$scope.date];
		console.log($scope.d[$scope.daynumber]);
		$scope.resultday = $scope.d[$scope.daynumber];
		$scope.dnmale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
		$scope.dnfemale = ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afia", "Amma"];
		//$scope.gender = response.gender;
		$scope.getDN();
	};



	
	



	//FB script
	  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
   	console.log(response.gender);
   	console.log(response.birthday);
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
     
     
      testAPI();
    } else if (response.status === 'not_authorized') {
    	 window.location = "http://localhost:8000/app"
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  function checkLoginState() {

    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '452662824875219',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.1' // use version 2.1
  });

  
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me?fields=id,name,birthday,friends,gender', function(response) {
      console.log('Successful login for: ' + response.name);
      console.log(response.gender);
   	console.log(response.birthday);
   	 $scope.birthdaytext = response.birthday;

   	  $scope.gender = response.gender;
		
	
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
    $scope.getday();
  }

	//ENd FB

	

	
	//$scope.$watch('birthdaytext', date());
  

	//$scope.compute();
	//$scope.wd = "N/A";

});

