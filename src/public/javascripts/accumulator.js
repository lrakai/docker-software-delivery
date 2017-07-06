angular.module('accumulatorApp', [])
  .controller('AccumulatorController', ['$scope', '$http', function ($scope, $http) {

    $scope.accumulator = [];
    $scope.item = '';
    $scope.enabled = false;

    $scope.add = function () {
      $scope.enabled = false;
      $http.post('/api')
        .then(function success(response) {
          $scope.accumulator.unshift(response.data);
          $scope.item = '';
        });
    }

    $http.get('/api')
      .then(function success(response) {
        $scope.accumulator = response.data;
        $scope.enabled = true;
      });

  }]);