angular.module('videogames', ['videogames.controllers', 'videogames.factories', 'ngRoute', 'firebase'])

.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: "views/home.html"
	})
	.when('/games', {
		templateUrl: "views/games.html",
		controller: 'listController as list'
	})
	.when('/game:gameId', {
		templateUrl: "views/game.html"
	})
	.otherwise({
		redirectTo: '/'
	});

		var config = {
		    apiKey: "AIzaSyD98lMQZzz5E23-1GJchwN7Ae7Py6QhnX0",
		    authDomain: "project-1932443890137770220.firebaseapp.com",
		    databaseURL: "https://project-1932443890137770220.firebaseio.com",
		    storageBucket: "project-1932443890137770220.appspot.com",
		  };
		  firebase.initializeApp(config);
});