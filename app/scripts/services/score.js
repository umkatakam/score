'use strict';

angular.module('scorerApp').factory('scoreService', function() {

        var matchInfoList = [];
        return {
            saveMatch:function(info) {
               console.log("inside save match:" + info.overs);
               return matchInfoList.push(info) - 1;
            },
            getMatch:function(id) {
                return matchInfoList[id];
            }
        };
    
});