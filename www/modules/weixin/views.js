weixin.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home.weixin', {
    url: "/weixin",
    views: {
      'home-weixin-view': {
        templateUrl: "modules/weixin/weixin.html",
      }
    }
  });
});