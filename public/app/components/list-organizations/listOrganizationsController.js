baSurvey.controller('listOrganizationsCtrl', [
    '$location',
    '$scope',
    '$timeout',
    'blockUI',
    'database',
    'FieldService',
    'TypeCode',
    'TypeText',
    'PeriodicCode',
    'PeriodicText',
    function($location, $scope, $timeout, blockUI, database, FieldService, TypeCode, TypeText, PeriodicCode, PeriodicText) {

      $scope.filter = {};
      $scope.filter.name = '';

      // Filter orgs by name
      $scope.filterOrgs = function(items) {
        var result = {};
        var filterName = $scope.filter.name.toLowerCase();
        if (filterName.length > 2) {
          angular.forEach(items, function(value, key) {
            var orgName = value.nombre.toLowerCase();
            if (orgName.indexOf(filterName) !== -1) {
              result[key] = value;
            }
          });
          return result;
        }
        return items;
      };

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
            $scope.buildReport($scope.orgs);

        }).finally(function() {
            blockUI.stop();
        });

        $scope.goEdit = function(id) {
            $timeout(function() {
                $location.path('editar-organizacion/' + id);
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

        $scope.buildReport = function(orgs){
            // Prepare Excel data:
            $scope.fileName = "report";
            $scope.exportData = [];

            $scope.buildReportHeader();

            $scope.processContent(orgs);
        }

        $scope.buildReportHeader = function(){
            // Headers:
            $scope.exportData.push(["Nombre",
                                    "Localidad",
                                    "Barrio",
                                    "Calle",
                                    "Numero",
                                    "Nombre Contacto",
                                    "Fijo",
                                    "Celular",
                                    "Correo",
                                    "Tipo Organizacion",
                                    "Almuerzo",
                                    "Cena",
                                    "Desayuno",
                                    "Merienda",
                                    "Beneficiarios 0 a 2 años",
                                    "Beneficiarios 3 a 5 años",
                                    "Beneficiarios 6 a 12 años",
                                    "Beneficiarios Adolescentes",
                                    "Beneficiarios Adultos",
                                    "Beneficiarios Ancianos",
                                    "Perioricidad",
                                    "Horario Mañana",
                                    "Horario Tarde",
                                    "Horario Noche"]);
        }

        $scope.processContent = function(orgs){
            // Data:
            angular.forEach(orgs, function(value, key) {
                var tipoOrg=$scope.getTypeOrg(value);
                var perioricidad = $scope.getPeriodicity(value);
                var horariosManana = $scope.getWorkTime(value.horario.manana);
                var horariosTarde = $scope.getWorkTime(value.horario.tarde);
                var horariosNoche = $scope.getWorkTime(value.horario.noche);
                $scope.exportData.push([value.nombre,
                                        value.ubicacion.localidad,
                                        value.ubicacion.barrio,
                                        value.ubicacion.calle,
                                        value.ubicacion.numero,
                                        value.contacto.nombre,
                                        value.contacto.telefonos.fijo.caracteristica + ' ' + value.contacto.telefonos.fijo.numero,
                                        value.contacto.telefonos.celular.caracteristica + ' ' + value.contacto.telefonos.celular.numero,
                                        value.contacto.email,
                                        tipoOrg,
                                        value.beneficios.almuerzo ? "Si" : "No",
                                        value.beneficios.cena ? "Si" : "No",
                                        value.beneficios.desayuno ? "Si" : "No",
                                        value.beneficios.merienda ? "Si" : "No",
                                        value.beneficiarios['0_2'],
                                        value.beneficiarios['3_5'],
                                        value.beneficiarios['6_12'],
                                        value.beneficiarios.adolescentes,
                                        value.beneficiarios.adultos,
                                        value.beneficiarios.ancianos,
                                        perioricidad,
                                        horariosManana,
                                        horariosTarde,
                                        horariosNoche
                                        ]);
            });
        }

        $scope.getTypeOrg = function(value){
            var tipoOrg="";
            switch(value.tipo){
                case TypeCode.civilAssociation:
                    tipoOrg=TypeText.civilAssociation;
                break;
                case TypeCode.cooperative:
                    tipoOrg=TypeText.cooperative;
                break;
                case TypeCode.foundation:
                    tipoOrg=TypeText.foundation;
                break;
                case TypeCode.other:
                    tipoOrg=TypeText.other;
                break;
            }
            return tipoOrg;
        }

        $scope.getPeriodicity = function(value){
            var perioricidad="";
            switch(value.periodicidad){
                case PeriodicCode.unaPorSemana:
                    perioricidad=PeriodicText.unaPorSemana;
                break;
                case PeriodicCode.tresPorSemana:
                    perioricidad=PeriodicText.tresPorSemana;
                break;
                case PeriodicCode.diario:
                    perioricidad=PeriodicText.diario;
                break;
            }
            return perioricidad;
        }

        $scope.getWorkTime = function(value){
            var horarios = "N/A";
            if(value.disponible){
                horarios = "Desde " + value.desde + "hs Hasta " + value.hasta + "hs";
            }
            return horarios
        }
    }
]);
