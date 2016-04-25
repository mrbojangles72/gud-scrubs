'use strict';
angular.module('init.controller',[]).controller("iniCtrl",['$scope','$rootScope','$location','authFactory',function($scope,$rootScope,$location,authFactory){

vendorUrl = window.URL || window.webkitURL;

navigator.getMedia = 	navigator.getUserMedia ||
						navigator.webkitGetUserMedia ||
						navigator.mediaDevices.getUserMedia ||
						navigator.msGetUserMedia;

navigator.getMedia({ video: true, audio: true }, function(stream){

	var Peer = require('simple-peer')
	var peer = new Peer({
	    initiator: location.hash === '#/init',
	    trickle: false,
	    stream: stream
	})

	peer.on('signal', function(data) {
	    document.getElementById('yourId').value = JSON.stringify(data)
	})

	document.getElementById('connect').addEventListener('click', function() {
	    var otherId = JSON.parse(document.getElementById('otherId').value)
	    peer.signal(otherId)
	})

	document.getElementById('send').addEventListener('click', function() {
	    var yourMessage = document.getElementById('yourMessage').value
	    peer.send(yourMessage)
	})

	peer.on('data', function(data) {
	    document.getElementById('messages').textContent += data + '\n'
	})

	peer.on('stream', function(stream){
		var video = document.createElement('video')
		document.body.appendChild(video)

		video.src = window.URL.createObjectURL(stream)
		video.play()
	})

// if streaming doesn't work, don't do any of the above
}, function (err){
	console.error(err)
})

}]);
