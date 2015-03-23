// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var weixin=angular.module('weixin', ['ionic', 'app.services', 
                                     'home.controllers', 
                                     'weixin.controllers',
                                     'address.controllers',
                                     'discover.controllers',
                                     'search.controllers',
                                     'my.controllers']);

weixin.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) { 

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home/weixin');

});
