baSurvey.controller('formCtrl', ['$scope', '$timeout', '$firebaseObject',
	function($scope, $timeout, $firebaseObject) {
		$scope.legalStatus = '';
		$scope.organizacion = {
			direccion: {},
			contacto: {},
			tipo: ''
		};
		$scope.personeria = {};

		$scope.scrollTo = function(target) {
			$('html, body').animate({
				scrollTop: $('#' + target).offset().top
			}, 1000);
		}

		$scope.onLegalStatusChange = function() {
			$timeout(function() {
				if ($scope.legalStatus === 'YES') {
					$scope.scrollTo('two');
				} else $scope.scrollTo('one');
			}, 250)
		}

		var ref = firebase.database().ref();

		var firebaseOrganizaciones = $firebaseObject(ref); //.child("organizaciones")
		firebaseOrganizaciones.$loaded().then(function(data) {
			console.log(data);
		});

		$scope.writeOrganization = function() {
			var id = 'ORG' + ref.push().key;
			var nuevaOrganizacion = {
				id: id,
				nombre: $scope.organizacion.nombre,
				calle: $scope.organizacion.direccion.calle,
				numero: $scope.organizacion.direccion.numero,
				barrio:  $scope.organizacion.direccion.barrio,
				referente:  $scope.organizacion.contacto.nombre,
				caracteristica:  $scope.organizacion.contacto.caracteristica,
				telefono:  $scope.organizacion.contacto.telefono,
				email:  $scope.organizacion.contacto.email,
				tipo: $scope.organizacion.tipo
			}
			firebaseOrganizaciones.organizaciones[id] = nuevaOrganizacion
			var saveProcess = firebaseOrganizaciones.$save();
			saveProcess.then(function(data){
				debugger
			});
		}
	}
])