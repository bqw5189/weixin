angular.module('home.controllers', [])

.controller('HomeCtrl', function($scope,$ionicPopover,AppConfig) {
	$scope.headerStyle=AppConfig.style.header;
	$scope.tabStyle=AppConfig.style.tab;
	
	
	// .fromTemplate() method
	  var template = '<ion-popover-view><ion-content></ion-content></ion-popover-view>';

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
