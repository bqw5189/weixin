angular.module('home.controllers', [])

.controller('HomeCtrl', function($scope,$ionicPopover,AppConfig) {
	$scope.headerStyle=AppConfig.style.header;
	$scope.tabStyle=AppConfig.style.tab;
	
	
	// .fromTemplate() method
	  var template = '<ion-popover-view style="background-color:#444;height:210px"><ion-content><ion-list>'+
	  '<ion-item class="item-icon-left" ng-href="#"><i class="icon ion-ios-chatbubble"></i>发起群聊</ion-item>'+
	  '<ion-item class="item-icon-left" ng-href="#"><i class="icon ion-person-add"></i>添加朋友</ion-item>'+
	  '<ion-item class="item-icon-left" ng-href="#"><i class="icon ion-qr-scanner"></i>扫一扫</ion-item>'+
	  '<ion-item class="item-icon-left" ng-href="#"><i class="icon ion-ios-email-outline"></i>帮助与反馈</ion-item>'+
	  '<ion-item class="item-icon-left" ng-href="#"></ion-item>'+
	  '<ion-item class="item-icon-left" ng-href="#"></ion-item>'+
	  '</ion-list></ion-content></ion-popover-view>';

	  $scope.popover = $ionicPopover.fromTemplate(template, {
	    scope: $scope
	  });

//	  // .fromTemplateUrl() method
//	  $ionicPopover.fromTemplateUrl('my-popover.html', {
//	    scope: $scope
//	  }).then(function(popover) {
//	    $scope.popover = popover;
//	  });


	  $scope.openPopover = function($event) {
	    $scope.popover.show($event);
	  };
	  $scope.closePopover = function() {
	    $scope.popover.hide();
	  };
	  //Cleanup the popover when we're done with it!
	  $scope.$on('$destroy', function() {
	    $scope.popover.remove();
	  });
	  // Execute action on hide popover
	  $scope.$on('popover.hidden', function() {
	    // Execute action
	  });
	  // Execute action on remove popover
	  $scope.$on('popover.removed', function() {
	    // Execute action
	  });
});
