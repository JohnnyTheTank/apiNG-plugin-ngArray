"use strict";

angular.module('jtt_aping_design_blanko', [])
    .controller('apingBlankoDesignController', ['$scope', '$rootScope', function ($scope, $rootScope) {

        $scope.$on('apiNG.resultMerged', function () {
            $scope.workingCopy = $scope.results;
        });

    }]);
