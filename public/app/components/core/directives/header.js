baSurvey.directive('customHeader', [
  '$location',
  function ($location) {
    return {
      templateUrl: 'app/components/core/templates/header.html',
      replace: true,
      scope: {
        Menu: '=headerMenu'
      },
      link: function (scope, elements, attr) {
        scope.Menu = attr.headerMenu;
        scope.newOrganization = function () {
          $location.path('/como-recibir-ayuda');
        };

        scope.scrollTo = function(target) {
          $('html, body').animate({
            scrollTop: $('#' + target).offset().top
          }, 1000);
        };
      }
    };
  }
]);
