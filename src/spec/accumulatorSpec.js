describe('accumulator', function () {

	beforeEach(angular.mock.module('accumulatorApp'));

	var $controller, $httpBackend;

	beforeEach(angular.mock.inject(function (_$controller_, _$httpBackend_) {
		$controller = _$controller_;
		$httpBackend = _$httpBackend_;
	}));

	afterEach(function () {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	describe('add', function () {
		it('add increases length by one', function () {
			var $scope = {};
			var controller = $controller('AccumulatorController', { $scope: $scope });
			$httpBackend.flush();
			$httpBackend.expectPOST('/api').respond(201, '{}');

			$scope.item = "newItem";
			$scope.add();

			expect($scope.accumulator.length).toBe(1);
			$httpBackend.flush();
		});
	});

});