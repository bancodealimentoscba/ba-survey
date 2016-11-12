baSurvey.controller('formCtrl', ['$scope', '$timeout', '$firebaseObject', 
	function($scope, $timeout, $firebaseObject) {
		$scope.legalStatus = '';
		$scope.organizationType = '';


		$scope.scrollTo = function(target) {
			$('html, body').animate({
				scrollTop: $('#'+target).offset().top
			}, 1000);
		}

		$scope.onLegalStatusChange = function() {
			$timeout(function(){
				if ($scope.legalStatus === 'YES'){
					$scope.scrollTo('two');
				} else $scope.scrollTo('one');
			}, 250)
		}

		 var database = firebase.database().ref();

		 var firebaseObject = $firebaseObject(database);
		 firebaseObject.$loaded().then(function(data){
		 	console.log(data);
		 });
	}
	])