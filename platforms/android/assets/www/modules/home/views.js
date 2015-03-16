weixin.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
    url: "/home",
    abstract: true,
    templateUrl: "modules/home/home.html",
    controller:'HomeCtrl'
  });
  
});