$(document).ready(function(){
	$(".loading").css("height",$("body").height());
});
$(window).on('load', function(){
	$(".loading").fadeOut();
});