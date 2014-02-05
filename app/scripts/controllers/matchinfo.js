'use strict';

angular.module('scorerApp').controller('MatchInfoCtrl', function($scope, $location, scoreService) {
    $scope.score = function() {
       console.log($scope.matchinfo);
       var id = scoreService.saveMatch($scope.matchinfo);
       console.log(id);
       $location.path("/score/match/" + id);
    }
});