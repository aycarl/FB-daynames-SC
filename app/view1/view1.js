'use strict';



angular.module('myApp.view1', ['ngRoute'])


.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])



.controller('View1Ctrl', function($scope) {

	$scope.birthdaytext = "01/28/1993";
	
	$scope.date = function() {

		$scope.daynumber = angular.copy(new Date($scope.birthdaytext).getDay());

	};

	$scope.getday = function(){
		$scope.date();
		$scope.d = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		//$scope.getday = $scope.d[$scope.date];
		console.log($scope.d[$scope.daynumber]);
		$scope.resultday = $scope.d[$scope.daynumber];
		$scope.dnmale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
		$scope.dnfemale = ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afia", "Amma"];
		$scope.gender;
		if($scope.gender=="Male"){
			$scope.resultname = $scope.dnmale[$scope.daynumber];
		}
		else{
			$scope.resultname = $scope.dnfemale[$scope.daynumber];
		}
	};

	
	$scope.getday();
	//$scope.$watch('birthdaytext', date());
  

	//$scope.compute();
	//$scope.wd = "N/A";

});

