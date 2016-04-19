'use strict';
angular.module('login.controller',[]).controller("logCtrl",['$scope','$rootScope','$location','authFactory',function($scope,$rootScope,$location,authFactory){

$rootScope.authenticated = false;
$scope.login = function(){
	$rootScope.authenticated = true;	
	$location.path('/home');

}

}]);
