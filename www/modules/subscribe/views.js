weixin.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('subscribe', {
    url: "/subscribe",
    templateUrl: "modules/subscribe/page.html",
    controller:'SubscribeCtrl'
  })
  .state('subscribe.detail', {
    url: "/subscribe/detail",
    templateUrl: "modules/subscribe/detail.html",
    controller:'SubscribeCtrl'
  })
  ;
});