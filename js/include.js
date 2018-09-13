//$("head").load('common/head.html')
//$("body").load('common/menus.html')
var html=document.documentElement;
var width=html.getBoundingClientRect().width; //获取屏幕宽度的另一个方法
html.style.fontSize=width/15+"px";