weixin.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home.discover', {
    url: "/discover",
    views: {
      'home-discover-view': {
        templateUrl: "modules/discover/discover.html",
        controller:'DiscoverCtrl'
      }
    }
  });
});