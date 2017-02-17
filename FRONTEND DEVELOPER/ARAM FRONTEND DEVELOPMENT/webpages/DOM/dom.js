document.getElementById("body").addEventListener("click", function(){
	var count=0;
	if(count<2){
		document.getElementById("eye1").style.height="100px"
		document.getElementById("eye1").style.width="83px"
	}
	else if(count>=2){
		document.getElementById("eye1").style.height="53px"
		document.getElementById("eye1").style.width="36px"
	}
	count++;
});


































