'use strict';

angular.module('scorerApp')
  .controller('ScoringCtrl', function ($scope, scoreService, $routeParams) {
    $scope.matchinfo = scoreService.getMatch($routeParams.id);
    $scope.scoreboard = {};
    $scope.scoreboard.matchinfo = $scope.matchinfo;
    $scope.scoreboard.innings = [];
    $scope.possibleRuns = [0,1,2,3,4,5,6,7,8,9,10,11,12];
    $scope.possibleWaysToScore = ["Bat", "Wides", "Wides + Byes", "Leg Byes", "No Ball", "No Ball + Bat", "No Ball + Byes", "No Ball + Leg Byes"];
    var firstInnings = {"batting":[], "bowling":[], "score":0, "wickets":0, "overs":0, "wides" : 0, "noballs" : 0, "legbyes" : 0, "byes" : 0};
    $scope.scoreboard.innings.push(firstInnings);
    var secondInnings = {"batting":[], "bowling":[], "score":0, "wickets":0, "overs":0, "wides" : 0, "noballs" : 0, "legbyes" : 0, "byes" : 0};
    $scope.scoreboard.innings.push(secondInnings);
    
    $scope.currentInnings = 0;
    $scope.currentStriker = 0;
    $scope.currentNonStriker = 0;
    $scope.currentBowler = 0;
    
    $scope.isStrikerAdded = false;
    $scope.isNonStrikerAdded = false;
    
    $scope.showStriker = false;
    $scope.showNonStriker = false;
    
    $scope.toggleStrikerLink = function() {
        $scope.isStrikerAdded = true;
    }
    
    $scope.toggleNonStrikerLink = function() {
        $scope.isNonStrikerAdded = true;
    }
    
    $scope.addStriker = function() {
        $scope.striker = {
            "batsman" : "",
            "howout" : "not out",
            "runs": 0,
            "balls": 0,
            "fours": 0,
            "sixes": 0
        }; 
        $scope.striker.batsman = $scope.strikerName;
        $scope.showStriker = true;
    }
    
    $scope.addNonStriker = function() {
        $scope.nonStriker = {
            "batsman" : "",
            "howout" : "not out",
            "runs": 0,
            "balls": 0,
            "fours": 0,
            "sixes": 0
        }; 
        $scope.nonStriker.batsman = $scope.nonStrikerName;
        $scope.showNonStriker = true;
    }
    
  });