weixin.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home.my', {
    url: "/my",
    views: {
      'home-my-view': {
        templateUrl: "modules/my/my.html",
        controller:'MyCtrl'
      }
    }
  });
});