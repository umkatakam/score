'use strict'

angular.module('scorerApp').controller('MatchDetailCtrl', function($scope, $routeParams){
	$scope.matchId = $routeParams.matchId;
    $scope.scoreboard = { 
  "matchinfo" : { 
    "tournament" : "id",
    "date" : "02/02/2005",
    "teams" : "ABCC Vs PQCC",
    "venue" : "A Big cricket ground",
    "status" : false,
    "mom" : "Jose Smith"
    },
  "innings" : [ 
    { 
      "batting" : [ 
        { 
          "batsman" : "Paul Williams",
          "howout" : "n.o.",
          "runs" : 70,
          "balls" : 77,
          "fours" : 6,
          "sixes" : 3
          },
        { 
          "batsman" : "Jeffrey Smith",
          "howout" : "c Scott b Kenneth",
          "runs" : 9,
          "balls" : 20,
          "fours" : 1,
          "sixes" : 0
          },
        { 
          "batsman" : "Brian Johnson",
          "howout" : "c Steven b Frank",
          "runs" : 30,
          "balls" : 12,
          "fours" : 3,
          "sixes" : 3
          },
        { 
          "batsman" : "Jeffrey Perez",
          "howout" : "c Charles b Frank",
          "runs" : 32,
          "balls" : 63,
          "fours" : 2,
          "sixes" : 0
          },
        { 
          "batsman" : "Brian Smith",
          "howout" : "n.o",
          "runs" : 59,
          "balls" : 33,
          "fours" : 5,
          "sixes" : 3
          }
        ],
      "bowling" : [ 
        { 
          "bowler" : "Kenneth Taylor",
          "overs" : 7,
          "runs" : 48,
          "madiens" : 1,
          "wickets" : 1
          },
        { 
          "bowler" : "Michael Gonzalez",
          "overs" : 7,
          "runs" : 53,
          "madiens" : 0,
          "wickets" : 0
          },
        { 
          "bowler" : "Frank Walker",
          "overs" : 7,
          "runs" : 36,
          "madiens" : 0,
          "wickets" : 2
          },
        { 
          "bowler" : "Steven Jackson",
          "overs" : 7,
          "runs" : 44,
          "madiens" : 0,
          "wickets" : 0
          },
        { 
          "bowler" : "Ronald Miller",
          "overs" : 7,
          "runs" : 47,
          "madiens" : 0,
          "wickets" : 0
          }
        ],
      "score" : 238,
      "wickets" : 3,
      "overs" : 35,
      "wides" : 18,
      "noballs" : 10,
      "legbyes" : 0,
      "byes" : 10
      },
    { 
      "batting" : [ 
        { 
          "batsman" : "Paul Harris",
          "howout" : "c Robert b Richard",
          "runs" : 16,
          "balls" : 18,
          "fours" : 1,
          "sixes" : 0
          },
        { 
          "batsman" : "Paul Walker",
          "howout" : "n.o.",
          "runs" : 5,
          "balls" : 46,
          "fours" : 1,
          "sixes" : 0
          },
        { 
          "batsman" : "Jeffrey Lee",
          "howout" : "n.o.",
          "runs" : 7,
          "balls" : 14,
          "fours" : 1,
          "sixes" : 0
          }
        ],
      "bowling" : [ 
        { 
          "bowler" : "Richard Walker",
          "overs" : 6,
          "runs" : 16,
          "madiens" : 1,
          "wickets" : 1
          },
        { 
          "bowler" : "Eric Walker",
          "overs" : 6,
          "runs" : 12,
          "madiens" : 1,
          "wickets" : 1
          },
        { 
          "bowler" : "Richard Allen",
          "overs" : 1,
          "runs" : 0,
          "madiens" : 1,
          "wickets" : 0
          }
        ],
      "score" : 34,
      "wickets" : 1,
      "overs" : 13,
      "wides" : 1,
      "noballs" : 0,
      "legbyes" : 3,
      "byes" : 4
      }
    ]
  }
});
