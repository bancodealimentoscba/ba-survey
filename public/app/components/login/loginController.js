baSurvey.controller('loginCtrl', ['$location', '$scope', '$location',
	function($location, $scope, $location) {
    $scope.login = function () {
      $scope.email;
      $scope.password;
			$location.path('orgsList');
    };
	}
])
