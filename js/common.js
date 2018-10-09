$("#nav-button").click(function(){
	var ob=$(".mobile-bar");
	var left=ob.css("left");
	if(left=="0px"){
		ob.css("left","-4.1rem")
	}else{
		ob.css("left","0px");
	}
})
