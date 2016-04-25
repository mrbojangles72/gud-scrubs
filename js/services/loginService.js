angular.module('authFact', [])
    .factory('authFactory', function ($http,$q) {
        var property = false;
	var deferred = $q.defer();
        return {
            authCreds: function (creds) {
	
		$http({method:'POST',
		       url:'/auth/login/',
		       data: creds })
		.success(function(data){
			deferred.resolve(data);			
            }).error(function(){
		deferred.reject('Authentication Error');
	    })
		return deferred.promise;
	   }

            
        };
    })
    .factory('contactFactory',function($http,$q){
	var deferred = $q.defer();
	return{
	   getContacts: function() {
            	$http({method:'GET',
		       url:'/auth/contacts/'})
		.success(function(data){
			deferred.resolve(data);
		
		}).error(function(){
		  	deferred.reject('Contacts Error');
		}) 
		return deferred.promise;   
            },
	
	   setStatus: function(status){
		$http({method:'POST',
		       url:'/auth/status/',
		       data: status })
		.success(function(data){
			deferred.resolve(data);
		}).error(function(){
			deferred.reject('Status Error');	
		})	
			return deferred.promise;
		
		},
	    addFriend: function(id){
		$http({method:'GET',
		       url:'/auth/addfriend',
		       data: id})
		.success(function(data){
			deferred.resolve(data);
		})
		.error(function(){
			deferred.reject('Add Friend Error');
		})
		return deferred.promise;
	    }

	  }
	
	});
