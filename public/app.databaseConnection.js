baSurvey.factory('database', ['$firebaseObject', function($firebaseObject) {
	var ref = firebase.database().ref();
	var connection;

	checkUndefined = function(value){
		for (var val in value){
			if (value[val] === undefined){
				value[val] = '';
			}
		}
	}

	return {
		connect: function() {
			connection = $firebaseObject(ref);
			return connection.$loaded();

			connection.$loaded().then(function(data) {
				console.log(data);
			});
		},
		writeData: function(field, value) {
			var preId = field.slice(0,3).toUpperCase();
			var id = preId + ref.push().key;

			checkUndefined(value);

			connection.organizaciones[id] = value;
			var saveProcess = connection.$save();
			return saveProcess;
		}
	}
}]);