angular.module('videoGames', ['videoGames.controllers', 'videoGames.services', 'ngRoute', 'firebase'])

.value('fbRef', 'https://project-1932443890137770220.firebaseio.com/');

.config(function($routeProvider) {

	var resolveGames = {
		games: function (Games){
			return Games.fetch();
		};
	};

	$routeProvider
		.when('/', {
			controller: 'GameListController as gameList',
			templateUrl: "views/list.html",
			resolve: resolveGames
		})
		.when('/edit', {
			controller: 'EditGameController as editGame'
			templateUrl: "views/details.html"
			resolve: resolveGames
		})
		.when('/details', {
			controller: 'NewGameController as editGame'
			templateUrl: "views/details.html"
			resolve: resolveGames
		})
		.otherwise({
			redirectTo: '/'
		})
});