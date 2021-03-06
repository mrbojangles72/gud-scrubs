'use sctrict';

var app = angular.module("vis",
	[
	   'main.controller',
	   'login.controller',
	   'init.controller',
	   'authFact',
	   'ngRoute'
	]
)
.config(['$routeProvider','$httpProvider',function($routeProvider,$httpProvider){


	$httpProvider.defaults.cache = false;
	if(!$httpProvider.defaults.headers.get){
		$httpProvider.defaults.headers.get = {};
	}
	$httpProvider.defaults.headers.get['If-Modified-Since'] ='0';
	$routeProvider
	.when('/',{
		templateUrl: 'views/login.html',
		controller:'logCtrl'
	})
	.when('/home',{
		templateUrl: 'views/home.html',
		controller:'mainCtrl'
	})
	.when('/chat',{
		templateUrl:'/views/chat.html',
		controller:'mainCtrl'
	})
	.when('/init',{
		templateUrl:'views/chat.html',
		controller:'iniCtrl'
	});

}]);


