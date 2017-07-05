angular.module('accumulatorApp', ['ngCookies'])
    .controller('AccumulatorController', ['$scope', '$cookies', function ($scope, $cookies) {

        function upgrade() {
            var accumulator = [];
            var lengthDifference = $scope.accumulator.length - $scope.emphasis.length;
            if (lengthDifference === 0) {
                return;
            }

            for(var i = 0; i < lengthDifference; i++) {
                $scope.emphasis.unshift(false);
            }

            $cookies.putObject('emphasis', $scope.emphasis);
        }

        $scope.accumulator = $cookies.getObject('accumulator') || [];
        $scope.emphasis = $cookies.getObject('emphasis') || [];
        upgrade();
        $scope.item = '';

        $scope.add = function () {
            $scope.accumulator.unshift($scope.item);
            $scope.emphasis.unshift(false);
            $cookies.putObject('accumulator', $scope.accumulator);
            $cookies.putObject('emphasis', $scope.accumulator);
            $scope.item = '';
        }

        $scope.toggleEmphasis = function (index) {
            $scope.emphasis[index] = !$scope.emphasis[index];
            $cookies.putObject('emphasis', $scope.emphasis);
        }

    }]);