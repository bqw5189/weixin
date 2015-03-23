angular.module('weixin.controllers', [])

.controller('WeiXinCtrl', function($scope,AppConfig) {
	$scope.headerStyle=AppConfig.style.header;
	
	$scope.items = [
	    { title: '订阅号', id: 1 ,img:'modules/weixin/img/dyh.jpg',lastMessage:'宝丽雅:回南天来袭!地湿难干？传说...',lastTime:'早上09:12',href:'#/subscribe',href:'#/subscribe'},
	    { title: '微龙城', id: 1 ,img:'modules/weixin/img/tslcw.jpg',lastMessage:'宝丽雅:回南天来袭!地湿难干？传说...',lastTime:'早上09:12',href:'#/subscribe'},
	    { title: '产品100', id: 1 ,img:'modules/weixin/img/cp100.jpg',lastMessage:'产品经理需求分析的六原则',lastTime:'早09:12',href:'#/subscribe'},
	    { title: '头条', id: 1 ,img:'modules/weixin/img/toutiao.jpg',lastMessage:'看完315再也不敢干这些事！避坑11...',lastTime:'昨天',href:'#/subscribe'},
	    { title: '微生意', id: 1 ,img:'modules/weixin/img/wsy.jpg',lastMessage:'你可知道这些科技巨头公司名字的来...',lastTime:'昨天',href:'#/subscribe'},
	    { title: '微信团队', id: 1 ,img:'modules/weixin/img/weixin.jpg',lastMessage:'欢迎你再次回到微信。如果你在使用...',lastTime:'2月13日',href:'#/subscribe'},
	    { title: '铅笔头', id: 1 ,img:'modules/weixin/img/qbt.jpg',lastMessage:'新春好礼送！送！送！',lastTime:'2月20日',href:'#/subscribe'},
	    { title: '猫猫', id: 1 ,img:'modules/weixin/img/miaomiao.jpg',lastMessage:'没地儿植树就在家和娃儿一起DIY盆栽...',lastTime:'3月12日',href:'#/subscribe'},
	    { title: '宝丽雅', id: 1 ,img:'modules/weixin/img/bly.jpg',lastMessage:'吃多少的决定权就掌握在你自己手里',lastTime:'3月13日',href:'#/subscribe'},
	    { title: '美正美妆', id: 1 ,img:'modules/weixin/img/mz.jpg',lastMessage:'不生病的秘诀只有一个字，那就是...',lastTime:'3月14日',href:'#/subscribe'},
	    { title: '大生活家', id: 1 ,img:'modules/weixin/img/dshj.jpg',lastMessage:'继续发送想吃的菜给我...',lastTime:'3月14日',href:'#/subscribe'},
	    
    ];
})
;
