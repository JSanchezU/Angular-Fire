angular.module('videogames.factories', [])

// Old way of firebase reference
//.value('ref', 'https://project-5047501402504107690.firebaseio.com')

.factory('$games', function($firebaseArray){
	var games = {};
	var ref = firebase.database().ref().child('games');

	games.list = function(){		
		var list = $firebaseArray(ref);
		return list.$loaded();
	};

	games.add = function(game){
		var list = $firebaseArray(ref);
		return list.$add(game);
	};

	return games;
})
