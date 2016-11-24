baSurvey.controller('formCtrl', ['$scope', '$timeout', 'database',
	function($scope, $timeout, database) {
		$scope.legalStatus = '';
		$scope.organization = {
			address: {},
			contact: {},
			type: ''
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

		database.connect()/*.then(function(data) {
			console.log(data);
		});*/

		$scope.writeOrganization = function() {
			var newOrganization = {
				nombre: $scope.organization.name,
				calle: $scope.organization.address.street,
				numero: $scope.organization.address.number,
				barrio:  $scope.organization.address.neighborhood,
				localidad:  $scope.organization.address.city,
				referente:  $scope.organization.contact.name,
				caracteristica:  $scope.organization.contact.prefix,
				telefono:  $scope.organization.contact.phone,
				email:  $scope.organization.contact.email,
				tipo: $scope.organization.type
			}
			database.writeData('organizaciones', newOrganization)
			
		}
	}
])