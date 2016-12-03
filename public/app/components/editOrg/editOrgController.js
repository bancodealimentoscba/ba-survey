baSurvey.controller('editOrgCtrl', ['$location', '$scope', '$timeout', 'blockUI', 'database',
  function($location, $scope, $timeout, blockUI, database) {

    // $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    // $scope.marker = {
    //   coords: {
    //     id: 0,
    //     latitude: -40.1451,
    //     longitude: -99.6680
    //   }
    // };

    $scope.save = function() {
      blockUI.start();
      $timeout(function() {
        blockUI.stop();
        $location.path('orgsList');
      }, 2000);
    };

    $scope.organizacion = {
      "estado": 1,
      "nombre": "Fundación Córdoba",
      "ubicacion": {
        "localidad": "cordoba",
        "barrio": "centro",
        "calle": "colon",
        "numero": "135",
        "coordenadas": {
          "lat": 0,
          "lng": 0
        }
      },
      "tipo": 1,
      "contacto": {
        "nombre": "A B C",
        "telefonos": {
          "celular": {
              "caracteristica": "351",
              "numero": "4244444"
          },
          "fijo": {
              "caracteristica": "351",
              "numero": "5555555"
          }
        },
        "email": "r@fake.com"
      },
      "beneficios": {
        "desayuno": true,
        "almuerzo": true,
        "merienda": true,
        "cena": true
      },
      "personaria_juridica": {
        "numero": ""
      },
      "beneficiarios": {
        "_0_2": 10,
        "_3_5": 20,
        "_6_12": 30,
        "adolescentes": 40,
        "adultos": 50,
        "ancianos": 60
      },
      "periodicidad": 1,
      "horario": {
        "manana": {
          "disponible": true,
          "desde": "8",
          "hasta": "10"
        },
        "tarde": {
          "disponible": true,
          "desde": "4",
          "hasta": "6"
        },
        "noche": {
          "disponible": true,
          "desde": "8",
          "hasta": "10"
        }
      }
    };

  }
])
