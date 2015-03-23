weixin.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('search', {
    url: "/search",
    templateUrl: "modules/search/page.html",
    controller:'SearchCtrl'
  });
});