baSurvey.controller('editOrgCtrl', [
  '$location',
  '$routeParams',
  '$scope',
  '$timeout',
  'blockUI',
  'database',
  function($location, $routeParams, $scope, $timeout, blockUI, database) {

    var id = $routeParams.id;

    // Get the organization list
    blockUI.start();
    database.connect().then(function(data) {
      $scope.organizacion = data.organizaciones[id];
      $timeout(function() {
        $scope.init();
      }, 200);
    });

    $scope.map = {
      center: {
        latitude: 45,
        longitude: -73
      },
      zoom: 15
    };

    $scope.marker = {
      id: 0,
      options: {
        draggable: true
      },
      coords: {
        latitude: -40.1451,
        longitude: -99.6680
      }
    };

    $scope.save = function() {
      $scope.organizacion.ubicacion.coordenadas.lat = $scope.marker.coords.latitude;
      $scope.organizacion.ubicacion.coordenadas.lng = $scope.marker.coords.longitude;

      blockUI.start();
      database.editData($scope.organizacion).then(function() {
        blockUI.stop();
        $location.path('orgsList');
      })
    };

    $scope.cancel = function() {
      $location.path('orgsList');
    };

    $scope.setCenterAndMarker = function(lat, lng) {
      $scope.$apply(function() {
        $scope.map.center = {
          latitude: lat,
          longitude: lng
        };
        $scope.marker.coords.latitude = lat;
        $scope.marker.coords.longitude = lng;
      })
    };

    $scope.init = function() {
      if ($scope.organizacion.ubicacion.coordenadas.lng === 0 && $scope.organizacion.ubicacion.coordenadas.lng === 0) {
        geocoder = new google.maps.Geocoder();
        geocoder.geocode({
          'address': $scope.organizacion.ubicacion.calle + " " + $scope.organizacion.ubicacion.numero + " " + $scope.organizacion.ubicacion.localidad + " Argentina"
        }, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            $scope.setCenterAndMarker(results[0].geometry.location.lat(), results[0].geometry.location.lng());
          } else {
            $scope.setCenterAndMarker(-31.4202849, -64.1887434);
          }
        })
      } else {
        $scope.setCenterAndMarker($scope.organizacion.ubicacion.coordenadas.lat, $scope.organizacion.ubicacion.coordenadas.lng);
      }
      blockUI.stop();
    };
  }
]);
