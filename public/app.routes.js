baSurvey.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.
		when('/index', {
			templateUrl: 'app/components/index/index.html',
			controller: 'indexCtrl'
		}).
		when('/form', {
			templateUrl: 'app/components/form/form.html',
			controller: 'formCtrl'
		}).
		otherwise({
			redirectTo: '/index'
		});

	}
]);