baSurvey.controller('orgsListCtrl', [
  '$location',
  '$scope',
  '$timeout',
  'blockUI',
  'database',
  'FieldService',
  function($location, $scope, $timeout, blockUI, database, FieldService) {

    // Show modal with all data from the org
    $scope.showModal = function(key) {
      $scope.orgModal = $scope.orgs[key];
      $scope.orgModal.id = key;
      $scope.orgModal.hasLegalStatus = ($scope. orgModal.personaria_juridica.numero > 0);
    };

    // Get the organization list
    blockUI.start();
    database.connect().then(function(data) {
      $scope.orgs = data.organizaciones;
    }).finally(function(){
      blockUI.stop();
    });

    $scope.goEdit = function(id) {
      $timeout(function(){
        $location.path('editOrg/' + id);
      }, 500);
    };

    $scope.getType = function(type) {
        return FieldService.getType(type);
    };

    $scope.getStatus = function(status) {
        return FieldService.getStatus(status);
    };

    $scope.getShedule = function(schedule) {
      return FieldService.getSchedule(schedule);
    };
  }
]);
