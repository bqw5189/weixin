weixin.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home.address', {
    url: "/address",
    views: {
      'home-address-view': {
        templateUrl: "modules/address/address.html",
        controller:'AddressCtrl'
      }
    }
  });
});