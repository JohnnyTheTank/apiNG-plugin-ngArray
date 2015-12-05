"use strict";

/**
 @author Jonathan Hornung (https://github.com/JohnnyTheTank)
 @url https://github.com/JohnnyTheTank/apiNG-plugin-ngArray
 @licence MIT
 */

var jjtApingNgArray = angular.module("jtt_aping_ng_array", [])
    .directive('apingNgArray', ['apingUtilityHelper', function (apingUtilityHelper) {
        return {
            require: '?aping',
            restrict: 'A',
            replace: 'false',
            link: function (scope, element, attrs, apingController) {

                var appSettings = apingController.getAppSettings();

                var requests = apingUtilityHelper.parseJsonFromAttributes(attrs.apingNgArray, "ngArray", appSettings);

                requests.forEach(function (request) {

                    if(request.name && scope[request.name] && scope[request.name].constructor === Array) {

                        var resultArray = [];

                        if (request.items < 0) {
                            resultArray = scope[request.name];
                        } else {
                            angular.forEach(scope[request.name], function (value, key) {
                                if(key < request.items) {
                                    resultArray.push(value);
                                }
                            });
                        }
                        apingController.concatToResults(resultArray);
                    }

                });
            }
        }
    }]);