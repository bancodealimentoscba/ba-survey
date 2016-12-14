baSurvey.controller('landingCtrl', ['$scope', '$location',
	function($scope, $location) {
		$scope.form = function () {
			$location.path('/form');
		};
	}
]);
