angular.module('data', [])
    .controller('dataController', ['$rootScope', '$scope', function ($rootScope, $scope) {
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

        $rootScope.object1 = {type:"simple object"};
    }]);