baSurvey.directive('headerlogin', [  
  '$firebaseAuth',
  '$location',
  'blockUI',  
  function ($firebaseAuth, $location, blockUI) {
    return {
        restrict:'E',
        templateUrl: 'app/components/core/templates/login.html',
        link: function(scope, elem, attrs) {               
            elem.bind('click', function(){
                scope.$apply(function(){
                    $location.path('login');            
                });
            });
      }
    };
  }
]);
