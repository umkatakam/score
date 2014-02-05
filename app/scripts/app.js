'use strict';

angular.module('scorerApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/matches', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).when('/matches/:matchId',{
        templateUrl: 'views/match.html',
        controller: 'MatchDetailCtrl'
      }).when('/scorecard/matchinfo',{
        templateUrl: 'views/matchinfo.html',
        controller: 'MatchInfoCtrl'
      }).when('/score/match/:id',{
        templateUrl: 'views/miniscorecard.html',
        controller: 'ScoringCtrl'
      })
      .otherwise({
        redirectTo: '/matches'
      });
  });
