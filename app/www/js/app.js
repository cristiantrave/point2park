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

.controller('ParkingCtrl', function($scope){
  console.log("Parking lots");
})

.controller('OptionsCtrl', function($scope){
  console.log("Options");
})

.controller('InfoCtrl', function($scope){
  console.log("Info");
})
/*
.controller('indexCtrl',function($scope,$http){
  console.log("You are enter in index.html");
 $http.get('http://localhost:3000/').
    success(function(data) {
      $scope.name = data;
      console.log(status);
    })
    .
    error(function(data, status, headers, config) {
                 console.log(status);
             })
})
*/
