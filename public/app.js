var baSurvey = angular.module('baSurvey', ['ngRoute', 'blockUI','firebase', 'uiGmapgoogle-maps'])
.config(
  ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
    GoogleMapApiProviders.configure({
      china: true
    });
  }]
);
