baSurvey.directive('customHeader', [
  '$location',
  function ($location) {
    return {
      templateUrl: 'app/components/core/templates/header.html',
      replace: true,
      link: function (scope, elements, attr) {
        scope.newOrganization = function () {
          $location.path('/como-recibir-ayuda');
        };
      }
    };
  }
]);
