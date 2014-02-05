'use strict';

angular.module('scorerApp')
  .controller('ScoringCtrl', function ($scope, scoreService, $routeParams) {
    $scope.matchinfo = scoreService.getMatch($routeParams.id);
  
  });