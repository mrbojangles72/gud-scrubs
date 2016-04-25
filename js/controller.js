'use strict';
angular.module('main.controller',[]).controller("mainCtrl",['$scope','$rootScope','$location',function($scope,$rootScope,$location){

angular.element(document).ready(function () {

//generate the unique id 



$scope.user = {name:"TUX"};
$scope.authenticated = true;

$result = mysql_query("SELECT * from listinfo") or die('Could not query');
	
});


$scope.call = function(){
//make the video call

//connect to db
$db=mysql_connect($localhost, 'root', 'alex-likes-anaL6969') or die('Could not connect');
mysql_select_db('carpet_munchers_2', $db) or die('');


$result = mysql_query("SELECT CONTACT_NAME,USR_ONLINE,USR_ID FROM ((USR JOIN CONTACT ON (USR.USR_NAME = CONTACT.USR_NAME))) WHERE USR.USR_NAME = "FRED" AND USR.USR_ONLINE = TRUE ORDER BY CONTACT.USR_NAME ASC;") or die('Could not query');

    mysql_close($db);
    echo json_encode($result);

}

$scope.acceptCall = function(){

//can accept the call
}
$scope.sendTxt = function(){

//send a txt
}

}]);
