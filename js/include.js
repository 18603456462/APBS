//$("head").load('common/head.html')
//$("body").load('common/menus.html')
var html=document.documentElement;
var width=html.getBoundingClientRect().width; 
html.style.fontSize=width/15+"px";