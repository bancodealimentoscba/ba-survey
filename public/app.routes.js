baSurvey.config([
	'$routeProvider',
	function ($routeProvider) {
		$routeProvider.
		when('/editar-organizacion/:id', {
			templateUrl: 'app/components/edit-organization/edit-organization.html',
			controller: 'editOrganizationCtrl',
			resolve: {
	      'currentAuth': ['Auth', function(Auth) {
	        return Auth.$requireSignIn();
	      }]
	    }
		}).
		when('/agregar-organizacion', {
			templateUrl: 'app/components/new-organization/new-organization.html',
			controller: 'newOrganizationController'
		}).
		when('/login', {
			templateUrl: 'app/components/login/login.html',
			controller: 'loginCtrl'
		}).
		when('/listado-organizaciones', {
			templateUrl: 'app/components/list-organizations/list-organizations.html',
			controller: 'listOrganizationsCtrl',
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
