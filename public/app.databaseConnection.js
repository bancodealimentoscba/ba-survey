baSurvey.factory('database', ['$firebaseObject', function($firebaseObject) {
	var ref = firebase.database().ref();
	var connection;

	checkUndefined = function(organization){
		for (var field in organization){
			if (typeof(organization[field]) === 'object'){
				checkUndefined(organization[field]);
			} else {
				if (typeof(organization[field]) === 'undefined'){
					organization[field] = '';
				}
			}
		}
	};

	return {
		connect: function() {
			connection = $firebaseObject(ref);

			return connection.$loaded();

			// connection.$loaded().then(function(data) {
			// 	console.log(data);
			// });
		},
		writeData: function(field, value) {
			var preId = field.slice(0,3).toUpperCase();
			var id = preId + ref.push().key;

			checkUndefined(value);
			value.id = id;
			connection.organizaciones[id] = value;
			var saveProcess = connection.$save();
			return saveProcess;
		},
		editData: function(value) {
			checkUndefined(value);

			connection.organizaciones[value.id] = value;
			var saveProcess = connection.$save();
			return saveProcess;
		}
	};
}]);
