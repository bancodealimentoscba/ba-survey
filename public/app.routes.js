baSurvey.config([
	'$routeProvider',
	function ($routeProvider) {
		$routeProvider.
		// when('/index', {
		// 	templateUrl: 'app/components/index/index.html',
		// 	controller: 'indexCtrl'
		// }).
		when('/editOrg/:id', {
			templateUrl: 'app/components/editOrg/editOrg.html',
			controller: 'editOrgCtrl',
			resolve: {
	      'currentAuth': ['Auth', function(Auth) {
	        return Auth.$requireSignIn();
	      }]
	    }
		}).
		when('/form', {
			templateUrl: 'app/components/form/form.html',
			controller: 'formCtrl'
		}).
		when('/login', {
			templateUrl: 'app/components/login/login.html',
			controller: 'loginCtrl'
		}).
		when('/orgsList', {
			templateUrl: 'app/components/orgsList/orgsList.html',
			controller: 'orgsListCtrl',
			resolve: {
	      'currentAuth': ['Auth', function(Auth) {
	        return Auth.$requireSignIn();
	      }]
	    }
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
baSurvey.factory('Auth', ['$firebaseAuth',
  function($firebaseAuth) {
    return $firebaseAuth();
  }
]);
