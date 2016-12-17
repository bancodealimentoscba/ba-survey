baSurvey.controller('orgsListCtrl', [
    '$location',
    '$scope',
    '$timeout',
    'blockUI',
    'database',
    'FieldService',
    function($location, $scope, $timeout, blockUI, database, FieldService) {

        // Show modal with all data from the org
        $scope.showEditOrgModal = function(key) {
            $scope.orgModal = $scope.orgs[key];
            // Prevent issue because the key name starts with a number
            $scope.orgModal.beneficiarios._0_2 = $scope.orgModal.beneficiarios['0_2'];
            $scope.orgModal.beneficiarios._3_5 = $scope.orgModal.beneficiarios['3_5'];
            $scope.orgModal.beneficiarios._6_12 = $scope.orgModal.beneficiarios['6_12'];
            $scope.orgModal.id = key;
            $scope.orgModal.hasLegalStatus = ($scope.orgModal.personaria_juridica.numero > 0);
        };

        // Show modal to confirm remove a org
        $scope.showRemoveOrgModal = function(key) {
            $scope.removeOrgModal = $scope.orgs[key];
            $scope.removeOrgModal.id = key;
        };

        // Get the organization list
        blockUI.start();
        database.connect().then(function(data) {
            $scope.orgs = data.organizaciones;
        }).finally(function() {
            blockUI.stop();
        });

        $scope.goEdit = function(id) {
            $timeout(function() {
                $location.path('editOrg/' + id);
            }, 500);
        };

        $scope.remove = function(id) {
            database.removeItem('organizaciones', id);
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
