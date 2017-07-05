angular.module('accumulatorApp', ['ngCookies'])
  .controller('AccumulatorController', ['$scope', '$cookies', function($scope, $cookies) {
    
    $scope.accumulator = $cookies.getObject('accumulator') || [];
    $scope.item = '';

    $scope.add = function() {
        $scope.accumulator.unshift($scope.item);
        $cookies.putObject('accumulator', $scope.accumulator);
        $scope.item = '';
    }

  }]);