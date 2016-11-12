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
		when('/orgsList', {
			templateUrl: 'app/components/orgsList/orgsList.html',
			controller: 'orgsListCtrl'
		}).
		when('/', {
			templateUrl: 'app/components/landing/landing.html',
			controller: 'landingCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});

	}
]);
