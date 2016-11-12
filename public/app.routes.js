baSurvey.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.
		when('/index', {
			templateUrl: 'app/components/index/index.html',
			controller: 'indexCtrl'
		}).
		otherwise({
			redirectTo: '/index'
		});

	}
]);