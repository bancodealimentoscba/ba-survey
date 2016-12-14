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

    $scope.getStatus = function(status) {
        return FieldService.getStatus(status);
    };

    $scope.getShedule = function(schedule) {
      return FieldService.getSchedule(schedule);
    };

    // $scope.orgs = [
    //   {
    //     "estado": 1,
    //     "nombre": "Fundación Córdoba",
    //     "ubicacion": {
    //       "localidad": "cordoba",
    //       "barrio": "centro",
    //       "calle": "colon",
    //       "numero": "135",
    //       "coordenadas": {
    //         "lat": 0,
    //         "lng": 0
    //       }
    //     },
    //     "tipo": 1,
    //     "contacto": {
    //       "nombre": "A B C",
    //       "telefonos": {
    //         "celular": {
    //             "caracteristica": "351",
    //             "numero": "4244444"
    //         },
    //         "fijo": {
    //             "caracteristica": "351",
    //             "numero": "5555555"
    //         }
    //       },
    //       "email": "r@fake.com"
    //     },
    //     "beneficios": {
    //       "desayuno": true,
    //       "almuerzo": true,
    //       "merienda": true,
    //       "cena": true
    //     },
    //     "personaria_juridica": {
    //       "numero": "13246578"
    //     },
    //     "beneficiarios": {
    //       "_0_2": 10,
    //       "_3_5": 20,
    //       "_6_12": 30,
    //       "adolescentes": 40,
    //       "adultos": 50,
    //       "ancianos": 60
    //     },
    //     "periodicidad": 1,
    //     "horario": {
    //       "manana": {
    //         "disponible": true,
    //         "desde": "8",
    //         "hasta": "10"
    //       },
    //       "tarde": {
    //         "disponible": true,
    //         "desde": "4",
    //         "hasta": "6"
    //       },
    //       "noche": {
    //         "disponible": true,
    //         "desde": "8",
    //         "hasta": "10"
    //       }
    //     }
    //   },
    //   {
    //     "estado": 2,
    //     "nombre": "Fundación Crecer",
    //     "ubicacion": {
    //       "localidad": "cordoba",
    //       "barrio": "Alberdi",
    //       "calle": "colon",
    //       "numero": "1500",
    //       "coordenadas": {
    //         "lat": 0,
    //         "lng": 0
    //       }
    //     },
    //     "tipo": 2,
    //     "contacto": {
    //       "nombre": "H F J",
    //       "telefonos": {
    //         "celular": {
    //             "caracteristica": "351",
    //             "numero": "4233333"
    //         },
    //         "fijo": {
    //             "caracteristica": "351",
    //             "numero": "666666"
    //         }
    //       },
    //       "email": "h@fake.com"
    //     },
    //     "beneficios": {
    //       "desayuno": true,
    //       "almuerzo": true,
    //       "merienda": false,
    //       "cena": false
    //     },
    //     "personaria_juridica": {
    //       "numero": ""
    //     },
    //     "beneficiarios": {
    //       "_0_2": 0,
    //       "_3_5": 0,
    //       "_6_12": 0,
    //       "adolescentes": 0,
    //       "adultos": 0,
    //       "ancianos": 0
    //     },
    //     "periodicidad": 0,
    //     "horario": {
    //       "manana": {
    //         "disponible": false,
    //         "desde": "",
    //         "hasta": ""
    //       },
    //       "tarde": {
    //         "disponible": false,
    //         "desde": "",
    //         "hasta": ""
    //       },
    //       "noche": {
    //         "disponible": false,
    //         "desde": "",
    //         "hasta": ""
    //       }
    //     }
    //   },
    //   {
    //     "estado": 3,
    //     "nombre": "Fundación Sol",
    //     "ubicacion": {
    //       "localidad": "cordoba",
    //       "barrio": "Güemes",
    //       "calle": "colon",
    //       "numero": "135",
    //       "coordenadas": {
    //         "lat": 0,
    //         "lng": 0
    //       }
    //     },
    //     "tipo": 3,
    //     "contacto": {
    //       "nombre": "M N O",
    //       "telefonos": {
    //         "celular": {
    //             "caracteristica": "351",
    //             "numero": "4299998"
    //         },
    //         "fijo": {
    //             "caracteristica": "351",
    //             "numero": "3344556"
    //         }
    //       },
    //       "email": "m@fake.com"
    //     },
    //     "beneficios": {
    //       "desayuno": false,
    //       "almuerzo": false,
    //       "merienda": false,
    //       "cena": true
    //     },
    //     "personaria_juridica": {
    //       "numero": "90872334"
    //     },
    //     "beneficiarios": {
    //       "_0_2": 0,
    //       "_3_5": 0,
    //       "_6_12": 0,
    //       "adolescentes": 0,
    //       "adultos": 50,
    //       "ancianos": 60
    //     },
    //     "periodicidad": 1,
    //     "horario": {
    //       "manana": {
    //         "disponible": false,
    //         "desde": "8",
    //         "hasta": "10"
    //       },
    //       "tarde": {
    //         "disponible": false,
    //         "desde": "4",
    //         "hasta": "6"
    //       },
    //       "noche": {
    //         "disponible": true,
    //         "desde": "20",
    //         "hasta": "23"
    //       }
    //     }
    //   }
    // ];

  }
]);
