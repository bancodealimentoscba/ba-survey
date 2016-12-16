baSurvey.controller('loginCtrl', [
	'$location',
	'$scope',
	'$firebaseAuth',
	'blockUI',
	function($location, $scope, $firebaseAuth, blockUI) {
		$scope.login = function() {
			blockUI.start();
			$firebaseAuth().$signInWithEmailAndPassword($scope.email, $scope.password)
				.then(function(firebaseUser) {
					$location.path('orgsList');
				}).finally(function() {
					blockUI.stop();
				});
		};
	}
]);
