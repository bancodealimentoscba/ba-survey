baSurvey.controller('orgsListCtrl', ['$scope', 'database',
  function($scope, database) {
    // Show modal with all data from the org
    $scope.showModal = function(index) {
      $scope.orgModal = $scope.orgs[index];
    };

    database.connect().then(function(data) {
      $scope.orgs = data.organizaciones;
    });


    // $scope.orgs = [{
    //   "nombre": "Fundación bla bla ",
    //   "ubicacion": {
    //     "localidad": "Córdoba",
    //     "barrio": "Barrio bla bla ",
    //     "calle": "Calle",
    //     "numero": "123"
    //   },
    //   "tipo": 0,
    //   "contacto": {
    //     "nombre": "Nombre ",
    //     "telefonos": {
    //       "fijo": {
    //         "caracteristica": "0351",
    //         "numero": "4300499"
    //       },
    //       "celular": {
    //         "caracteristica": "0351",
    //         "numero": "156868686"
    //       }
    //     },
    //     "email": "correo@correo.com"
    //   },
    //   "personaria_juridica": {
    //     "nombre": "Fundación 123121",
    //     "beneficios": {
    //       "desayuno": true,
    //       "almuerzo": true,
    //       "merienda": true,
    //       "cena": true
    //     },
    //     "beneficiarios": {
    //       "dos": 12,
    //       "cinco": 12,
    //       "doce": 12,
    //       "adolescentes": 12,
    //       "adultos": 12,
    //       "ancianos": 12
    //     },
    //     "periodicidad": 3,
    //     "horario": {
    //       "manana": true,
    //       "tarde": true,
    //       "noche": true
    //     }
    //   }
    // }, {
    //   "nombre": "Fundación bla bla 2 ",
    //   "ubicacion": {
    //     "localidad": "Córdoba",
    //     "barrio": "Barrio bla bla 2",
    //     "calle": "Calle 2",
    //     "numero": "123"
    //   },
    //   "tipo": 0,
    //   "contacto": {
    //     "nombre": "Nombre ",
    //     "telefonos": {
    //       "fijo": {
    //         "caracteristica": "0351",
    //         "numero": "4300499"
    //       },
    //       "celular": {
    //         "caracteristica": "0351",
    //         "numero": "156868686"
    //       }
    //     },
    //     "email": "correo@correo.com"
    //   },
    //   "personaria_juridica": {
    //     "nombre": "Fundación 123121",
    //     "beneficios": {
    //       "desayuno": true,
    //       "almuerzo": true,
    //       "merienda": true,
    //       "cena": true
    //     },
    //     "beneficiarios": {
    //       "dos": 12,
    //       "cinco": 12,
    //       "doce": 12,
    //       "adolescentes": 12,
    //       "adultos": 12,
    //       "ancianos": 12
    //     },
    //     "periodicidad": 3,
    //     "horario": {
    //       "manana": true,
    //       "tarde": true,
    //       "noche": true
    //     }
    //   }
    // }];
  }
])