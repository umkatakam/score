'use strict'

angular.module('scorerApp',[]).factory('matchlist', function(){
    var matches =[{"id":"1","team1":"ABCC", "score1":{"runs": "238", "wickets":"5", "overs":"35"}, "team2":"PQCC", "score2":{"runs": "34", "wickets":"1", "overs":"13"}, "venue":"A big cricket gorund", "live":true},{"id":"2","team1":"RCC", "score1":{"runs": "138", "wickets":"9", "overs":"35"}, "team2":"SCC", "score2":{"runs": "28", "wickets":"3", "overs":"12.3"}, "venue":"A fast cricket gorund", "live":false},{"id":"3","team1":"BCC", "score1":{"runs": "138", "wickets":"9", "overs":"35"}, "team2":"TCC", "score2":{"runs": "28", "wickets":"3", "overs":"12.3"}, "venue":"A fast cricket gorund", "live":false},{"id":"4","team1":"ACC", "score1":{"runs": "138", "wickets":"9", "overs":"35"}, "team2":"XCC", "score2":{"runs": "28", "wickets":"3", "overs":"12.3"}, "venue":"A fast cricket gorund", "live":false}];
    return matches;
});
