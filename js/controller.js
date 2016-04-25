'use strict';
angular.module('main.controller',[]).controller("mainCtrl",['$scope','$rootScope','$location',function($scope,$rootScope,$location){

angular.element(document).ready(function () {

//generate the unique id 



$scope.user = {name:"TUX"};
$scope.authenticated = true;
	
});


$scope.call = function(){

//make the video call
}

$scope.acceptCall = function(){

//can accept the call
}
$scope.sendTxt = function(){

//send a txt
}

}]);
