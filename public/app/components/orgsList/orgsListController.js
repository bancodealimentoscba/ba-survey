baSurvey.controller('orgsListCtrl', ['$scope',
	function($scope) {
    $scope.showModal = function(index) {
      console.log(index);
      $scope.orgModal = $scope.orgs[index];
    };
    $scope.orgs = [
      {
        "nombre": "Fundación bla bla ",
        "ubicacion": {
          "localidad": "Córdoba",
          "barrio": "Barrio bla bla ",
          "calle": "Calle",
          "numero": "123"
        },
        "tipo": 0,
        "contacto": {
          "nombre":"Nombre ",
          "telefonos": {
            "fijo": {"caracteristica": "0351", "numero": "4300499"},
            "celular": {"caracteristica": "0351", "numero": "156868686"}
          },
          "email": "correo@correo.com"
        },
        "personaria_juridica": {
          "nombre": "Fundación 123121",
          "beneficios": {
            "desayuno": true,
            "almuerzo": true,
            "merienda": true,
            "cena": true
          },
          "beneficiarios": {
            "0_2": 12,
            "3_5": 12,
            "6_12": 12,
            "adolescentes": 12,
            "adultos": 12,
            "ancianos": 12
          },
          "periodicidad": 3,
          "horario": {
            "manana": true,
            "tarde": true,
            "noche": true
          }
        }
      },
      {
        "nombre": "Fundación bla bla 2 ",
        "ubicacion": {
          "localidad": "Córdoba",
          "barrio": "Barrio bla bla 2",
          "calle": "Calle 2",
          "numero": "123"
        },
        "tipo": 0,
        "contacto": {
          "nombre":"Nombre ",
          "telefonos": {
            "fijo": {"caracteristica": "0351", "numero": "4300499"},
            "celular": {"caracteristica": "0351", "numero": "156868686"}
          },
          "email": "correo@correo.com"
        },
        "personaria_juridica": {
          "nombre": "Fundación 123121",
          "beneficios": {
            "desayuno": true,
            "almuerzo": true,
            "merienda": true,
            "cena": true
          },
          "beneficiarios": {
            "0_2": 12,
            "3_5": 12,
            "6_12": 12,
            "adolescentes": 12,
            "adultos": 12,
            "ancianos": 12
          },
          "periodicidad": 3,
          "horario": {
            "manana": true,
            "tarde": true,
            "noche": true
          }
        }
      }
    ];
	}
])
