baSurvey.controller('newOrganizationController', [
	'$location',
	'$scope',
	'$timeout',
	'$firebaseAuth',
	'blockUI',
	'database',
	function($location, $scope, $timeout, $firebaseAuth, blockUI, database) {

		$scope.isLegalStatusRequired = false;

		// Authenticates the client using a new, temporary guest account
		blockUI.start();
		$firebaseAuth().$signInAnonymously().then(function(firebaseUser) {
		}).finally(function(){
			blockUI.stop();
		});

		$scope.legalStatus = '';
		$scope.organization = {
			address: {},
			contact: {},
			type: '',
			periodicity: {
				onceWeek: false,
				threeTimes: false,
				everyday: false
			},
			services: {
				breakfast: false,
				lunch: false,
				snak: false,
				dinner: false
			},
			recipient: {
				_0_2: 0,
				_3_5: 0,
				_6_12: 0,
				teenagers: 0,
				adults: 0,
				elder: 0
			},
			schedule: {
				morning: {
					available: false
				},
				afternoon: {
					available: false
				},
				night: {
					available: false
				},
			}
		};

		$scope.personeria = {};

		$scope.scrollTo = function(target) {
			$('html, body').animate({
				scrollTop: $('#' + target).offset().top
			}, 1000);
		};

		$scope.onLegalStatusChange = function() {
			$timeout(function() {
				if ($scope.legalStatus === 'YES') {
					$scope.scrollTo('three');
					$scope.isLegalStatusRequired = true;
				}
				else {
					$scope.scrollTo('two');
					$scope.isLegalStatusRequired = false;
				}
			}, 250);
		};

		var getLegalStatus = function () {
			return ($scope.legalStatus === 'YES' ? '1' : '2');
		};

		database.connect();

		$scope.writeOrganization = function() {
			var newOrganization = {
				nombre: $scope.organization.name,
				estado: getLegalStatus(),
				ubicacion: {
					localidad: $scope.organization.address.city,
					barrio: $scope.organization.address.neighborhood,
					calle: $scope.organization.address.street,
					numero: $scope.organization.address.number,
					coordenadas: {
						lat: 0,
						lng: 0
					}
				},
				tipo: $scope.organization.type,
				contacto: {
					nombre: $scope.organization.contact.name,
					telefonos: {
						celular: {
	            caracteristica: $scope.organization.contact.cellphone_prefix,
	            numero: $scope.organization.contact.cellphone_number
          	},
	          fijo: {
	            caracteristica: $scope.organization.contact.phone_prefix,
	            numero: $scope.organization.contact.phone_number
	          }
					},
					email: $scope.organization.contact.email
				},
				beneficios: {
	        desayuno: $scope.organization.services.breakfast,
	        almuerzo: $scope.organization.services.lunch,
	        merienda: $scope.organization.services.snak,
	        cena: $scope.organization.services.dinner
	      },
	      personaria_juridica: {
	        numero: $scope.organization.legalStatus
	      },
				beneficiarios: {
	        "0_2": $scope.organization.recipient._0_2,
	        "3_5": $scope.organization.recipient._3_5,
	        "6_12": $scope.organization.recipient._6_12,
	        adolescentes: $scope.organization.recipient.teenagers,
	        adultos: $scope.organization.recipient.adults,
	        ancianos: $scope.organization.recipient.elder
	      },
	      periodicidad: $scope.organization.periodicity,
	      horario: {
	        manana: {
	          disponible: $scope.organization.schedule.morning.available,
	          desde: $scope.organization.schedule.morning.from,
	          hasta: $scope.organization.schedule.morning.to
	        },
	        tarde: {
	          disponible: $scope.organization.schedule.afternoon.available,
	          desde: $scope.organization.schedule.afternoon.from,
	          hasta: $scope.organization.schedule.afternoon.to
	        },
	        noche: {
	          disponible: $scope.organization.schedule.night.available,
	          desde: $scope.organization.schedule.night.from,
	          hasta: $scope.organization.schedule.night.to
	        }
				}
			};

			$scope.goToLanding = function() {
				$location.path('');
			};

			$scope.showOrgModal = false;

			blockUI.start();
			var id = database.getOrganizationId('organizaciones');
			database.writeItem('organizaciones', newOrganization, id).finally(function(){
				$scope.showOrgModal = true;
				// Signs out the temporary guest account
				$firebaseAuth().$signOut().then(function() {
					$scope.orgModal = {
						id: id,
						name: newOrganization.nombre
					};
				}).finally(function(){
					blockUI.stop();
				});
			});
		};
	}
]);
