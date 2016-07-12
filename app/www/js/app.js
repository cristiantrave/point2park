// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider

  .state('tab',{
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tab.html'
  })

  .state('tab.parking',{
    url: '/parking',
    views: {
      'tab-parking': {
        templateUrl: 'templates/parking.html',
        controller: 'ParkingCtrl'
      }
    }
  })

  .state('tab.options',{
    url: '/options',
    views: {
      'tab-options':{
        templateUrl: 'templates/options.html',
        controller: 'OptionsCtrl'
      }
    }
  })

  .state('tab.info',{
    url: '/info',
    views: {
      'tab-info':{
        templateUrl: 'templates/info.html',
        controller: 'InfoCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/tab/parking');
})

.controller('ParkingCtrl', function($scope, $http){
  console.log("Parking lots");


  //$scope.getData = function(){
    //$scope.check = false;
    $http.get('http://localhost:3000/').
    success(function(data) {
      $scope.parkinglots = data;
      console.log(data);
    })
    .
    error(function(data, status, headers, config) {
      console.log(status);
    })

    $scope.doRefresh = function() {
      $http.get('http://localhost:3000/').
      success(function(data) {
        $scope.parkinglots = data;
      })
      .
      error(function(data, status, headers, config) {
        console.log(status);
      })
      $scope.$broadcast('scroll.refreshComplete');
      $scope.$apply()
    };

  //}
  /*
  //$scope.getData();



  //DISTANCE MATRIX SERVICE
  $scope.distance = function(lat, lon,$scope,data) {
    var origin = new google.maps.LatLng(41.648229,-4.729198);
    var destination = new google.maps.LatLng(lat,lon);
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
      origins: [origin],
      destinations: [destination],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false,
      durationInTraffic: false
    }, function(response, status) {
      if (status != google.maps.DistanceMatrixStatus.OK) {
        alert('Error was: ' + status);
      } else {
        console.log(Math.round(response.rows[0].elements[0].distance.value/1000));
        $scope.dist = Math.round(response.rows[0].elements[0].distance.value/1000);
        data.distance = $scope.dist;
        //document.getElementById(id).innerHTML = Math.round(response.rows[0].elements[0].distance.value/1000)+" km";
      }

    });
  }

  $scope.getData()
*/
})

.controller('OptionsCtrl', function($scope){
  console.log("Options");
})

.controller('InfoCtrl', function($scope){
  console.log("Info");
})
