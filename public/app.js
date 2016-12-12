var baSurvey = angular.module('baSurvey', [
  'ngRoute',
  'blockUI',
  'firebase',
  'uiGmapgoogle-maps'
])
.run([
  '$rootScope',
  '$location',
  function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
      if (error === 'AUTH_REQUIRED') {
        $location.path('/login');
      }
    });
  }
])
.config([
  'uiGmapGoogleMapApiProvider',
  function(GoogleMapApiProviders) {
    GoogleMapApiProviders.configure({
      china: true
    });
  }
]);
