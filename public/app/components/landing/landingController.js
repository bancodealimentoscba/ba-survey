baSurvey.controller('landingCtrl', ['$scope', '$location',
	function($scope, $location) {
		$scope.newOrganization = function () {
			$location.path('/agregar-organizacion');
		};
	}
]);
