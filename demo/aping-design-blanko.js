"use strict";

angular.module('jtt_aping_design_blanko', [])
    .controller('apingBlankoDesignController', ['$scope', '$rootScope', function ($scope, $rootScope) {

        $scope.$on('apiNG.resultMerged', function () {
            $scope.workingCopy = $scope.results;
        });

        $rootScope.array1 = [
            {x: true, y: false},
            {z: false, q: true},
            {a: false, b: true}
        ];

        $rootScope.array2 = [
            {c: true, d: false},
            {e: false, h: true},
            {f: false, g: true}
        ];

    }]);
