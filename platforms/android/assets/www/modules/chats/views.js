weixin.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('chats', {
    url: "/chats",
    templateUrl: "modules/chats/page.html"
  })
});