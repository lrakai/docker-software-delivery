describe('accumulator', function () {
		
	beforeEach(angular.mock.module('accumulatorApp'));

	var $controller;

	beforeEach(angular.mock.inject(function(_$controller_){
	  $controller = _$controller_;
	}));

	describe('add', function () {
		it('add increases length by one', function () {
			var $scope = {};
			var controller = $controller('AccumulatorController', { $scope: $scope });
            
            $scope.item = "newItem";
			$scope.add();

			expect($scope.accumulator.length).toBe(1);
		});	
	});

});