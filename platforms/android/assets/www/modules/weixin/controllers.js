angular.module('weixin.controllers', [])

.controller('WeiXinCtrl', function($scope,AppConfig) {
	$scope.headerStyle=AppConfig.style.header;
	
	$scope.items = [
	    { title: '订阅号', id: 1 ,img:'modules/weixin/img/dyh.jpg',lastMessage:'宝丽雅:回南天来袭!地湿难干？传说...',lastTime:'早上09:12',href:'#/subscribe/list'},
	    { title: '猫猫', id: 1 ,img:'modules/weixin/img/miaomiao.jpg',lastMessage:'没地儿植树就在家和娃儿一起DIY盆栽...',lastTime:'3月12日',href:'#/chats'}
    ];
})
;
