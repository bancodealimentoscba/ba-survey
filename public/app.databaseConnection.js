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
		},
		writeItem: function(field, item) {
			var preId = field.slice(0,3).toUpperCase();
			var id = preId + ref.push().key;

			checkUndefined(item);
			item.id = id;
			connection[field][id] = item;
			
			var saveProcess = connection.$save();
			return saveProcess;
		},
		editItem: function(field, item) {
			checkUndefined(item);

			connection[field][item.id] = item;
			var saveProcess = connection.$save();
			return saveProcess;
		},
		removeItem: function(field, item){
			delete connection[field][item];

			var saveProcess = connection.$save();
			return saveProcess;
		}
	};
}]);
