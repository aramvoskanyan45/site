//MENU show and hidden
var switcher=true;
var tab=$(".menu");
var tab_content=$(".drop-menu");
for(var i=0;i<tab.length;i++){
	(function(i){
		tab[i].addEventListener("click",function(e){
			for(var j=0;j<tab.length;j++){
				tab_content[j].style.visibility="hidden";
			}
			if(switcher===true){
				tab_content[i].style.visibility="visible";
					switcher=false;
			}
			else{
				tab_content[i].style.visibility="hidden";
					switcher=true;
			}
				e.preventDefault();
		})
	})(i)
}

//MENU-small show and hidden	
	var switcher=true;
document.getElementById("menu_init").addEventListener("click", function(){
	if(switcher===true){
		document.getElementById("wrapper").style.display="block";
		switcher=false;
	}
	else{
		document.getElementById("wrapper").style.display="none";
		switcher=true;
	}
})



//CATEGORIES show and hidden	
	var switcher=true;
document.getElementById("left_contentButton").addEventListener("click", function(){
	if(switcher===true){
		document.getElementById("left_content").style.display="block";
		document.getElementById("nav_first").style.width="152px";
		document.getElementById("nav_first").style.lineHeight="none";
		document.getElementById("register_small").style.width="70px";
		document.getElementById("register_small").style.fontSize="10px";
		switcher=false;
	}
	else{
		document.getElementById("left_content").style.display="none";
		switcher=true;
	}
})



//YEAR show and hidden	
	var switcher=true;
document.getElementById("right_contentButton").addEventListener("click", function(){
	if(switcher===true){
		document.getElementById("right_content").style.display="block";
		switcher=false;
	}
	else{
		document.getElementById("right_content").style.display="none";
		switcher=true;
	}
})



//AUTO-SLIDER-IMAGES 
var count=1;
setInterval(function(){
	var slider_items=document.getElementsByClassName("slider_item");
	for(var i=0;i<slider_items.length;i++){
		slider_items[i].style.zIndex=0;
	}
	document.getElementById("slider_item"+count).style.zIndex=1;
		count++;
	if(count>slider_items.length){
		count=1;
	}
},3000)



//MANUAL-SLIDER-IMAGES(NEXT) 
$(document).ready(function(){
		count=1;
		slider_items=$(".slider_item")
	$(".button_right_img").on("click", function(){
		$(".slider_item").css({"zIndex":10});
		$("#slider_item"+count).css({"zIndex":20});
			count++;
			if(count>slider_items.length){
				count=1;
			}
	})
})
//MANUAL-SLIDER-IMAGES(BACK) 
$(document).ready(function(){
		count=1;
		slider_items=$(".slider_item")
	$(".button_left_img").on("click", function(){
		$(".slider_item").css({"zIndex":10});
		$("#slider_item"+count).css({"zIndex":20});
			count--;
		if(count<1){
			count=slider_items.length;
		}
	})
})



//popup
$(document).ready(function() {
    $("#login").on("click", function(){
		$("#popup").fadeIn();
		$("#overpage").fadeIn();
    });
});
//close_popup
$(document).ready(function() {
    $("#close_popup").on("click", function(){
		$("#popup").fadeOut();
		$("#overpage").fadeOut();
    });
	$("#overpage").on("click", function(){
		$("#popup").fadeOut();
		$("#overpage").fadeOut();
    });
});




//scroll_popup
$(document).ready(function(){
	var firstScroll = 0;
	$(window).scroll(function(){
		var thisScroll = $(this).scrollTop();
		if(thisScroll > firstScroll && $(document).scrollTop() >= (($(document).height()*0.8)-$(window).height())){
			$("#scroll_popup").fadeIn();
			$("#scroll_overpage").fadeIn();
		}	
		else if(thisScroll < firstScroll)  {
			$("#scroll_popup").fadeOut(300);
			$("#scroll_overpage").fadeOut();	
		} 
		firstScroll = thisScroll;
	})
})
//close_scroll_popup
$(document).ready(function() {
    $("#close_scroll_popup").on("click", function(){
		$("#scroll_popup").fadeOut(300);
		$("#scroll_overpage").fadeOut();
    });
	$("#scroll_overpage").on("click", function(){
		$("#scroll_popup").fadeOut(300);
		$("#scroll_overpage").fadeOut();
	})
});



//login alert
$(document).ready(function(){
	var foo=$("#send").on("click", function(){
		var x=$("#username").val();
		var y=$("#password").val();
		if(x=="mic" && y=="armenia"){
			alert("HELLO MIC WELLCOME FLEX")
		}
		else{
			alert("your login or password Incorect")
		}
	})
})



//clock
	function digitalWatch(){
	var date=new Date();
	var hours=date.getHours();
	var minutes=date.getMinutes();
	var seconds=date.getSeconds();
	if(hours<10){
		hours="0"+hours;
	}
	if(minutes<10){
		minutes="0"+minutes;
	}
	if(seconds<10){
		seconds="0"+seconds;
	}
	document.getElementById("digitalWatch").innerHTML=hours+":"+minutes+":"+seconds
	var colorString="#"+seconds+minutes+hours;
	document.getElementById("header").style.border=colorString;
	setTimeout("digitalWatch()",1000);
}
























