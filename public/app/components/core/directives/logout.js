baSurvey.directive('logout', [
  '$firebaseAuth',
  '$location',
  'blockUI',
  function ($firebaseAuth, $location, blockUI) {
    return {
      templateUrl: 'app/components/core/templates/logout.html',
      link: function(scope, elem, attrs) {
        elem.bind('click', function() {
          // There is a user logued in
          if ($firebaseAuth().$getAuth()) {
            blockUI.start();
            // Sign out the user
            $firebaseAuth().$signOut().then(function() {
      				$location.path('login');
      			}).finally(function(){
      	      blockUI.stop();
      	    });
          }
          else {
            $location.path('login');
          }
        });
      }
    };
  }
]);
