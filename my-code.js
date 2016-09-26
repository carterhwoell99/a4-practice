$(document).ready(function(){
	
	$("p").hide();
	$("#hotpic").hide();

	$("h1").click(function(){
	
		$(this).next().fadeToggle(1000);
		
	});	
	
	$("#testbutton").click(function() { 
		
		$("#jq02").css("background-color","#FF0000");
	

		
	});
	
	
	
});












