weixin.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('subscribe', {
    url: "/subscribe",
    templateUrl: "modules/subscribe/page.html"
  })
  .state('subscribe.list', {
    url: "/list",
    templateUrl: "modules/subscribe/list.html",
    controller:'SubscribeCtrl'
  })
  .state('subscribe.detail', {
	    url: "/detail",
	    templateUrl: "modules/subscribe/detail.html",
	    controller:'SubscribeCtrl'
	  })
  ;
  $urlRouterProvider.when('/subscribe','/subscribe/list');
});