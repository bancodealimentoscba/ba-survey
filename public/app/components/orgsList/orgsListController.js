baSurvey.controller('orgsListCtrl', ['$scope', 'blockUI', 'database',
  function($scope, blockUI, database) {

    // Show modal with all data from the org
    $scope.showModal = function(index) {
      $scope.orgModal = $scope.orgs[index];
    };

    // Get the organization list
    blockUI.start();
    database.connect().then(function(data) {
      $scope.orgs = data.organizaciones;
    }).finally(function(){
      blockUI.stop();
    });

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
    //       "0_2": 10,
    //       "3_5": 20,
    //       "6_12": 30,
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
    //   }
    // ];

  }
])
