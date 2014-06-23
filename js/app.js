// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
function expend(x) {
	console.log(x);
	$('.popDown').hide();
	$(x).toggle();
}
function largeScreen(h,w) {
	$('#main').height(
		w*(9/16)
	);	
}
function page(h,w) {
	var page = $(".page");
	var fullWidth = $(".fullWidth");
	page.height(h);
	page.width(w);
	fullWidth.width(w);
}
function slideNav(h,w) {

	var controller = $(".sandwich");
	var subject = $(".activePage");
	var distance = w*.8;
	var speed = 500;
	var sandwich = $("#mobileControl");
	
	window.slideStatus = "0"; // close
	
	
	controller.click(
		function() {
		if(window.slideStatus === "0") {
				subject.animate(
					{
						"left" : distance + "px"
					}, speed, function() {
						window.slideStatus = "1"
					}
				);
				sandwich.animate(
					{
						"left" : distance + "px"
					}, {
						queue: false,
						duration: speed, 
						
					}, function() {
						window.slideStatus = "1"
					}
				);
			} else if (window.slideStatus === "1") {
				subject.animate(
					{
						"left" : "0px"
					}, speed, function() {
						window.slideStatus = "0"
					}
				);
				sandwich.animate(
					{
						"left" : "0px"
					}, {
						queue: false,
						duration: speed, 
						
					}, function() {
						window.slideStatus = "0"
					}
				);
			}
		}
	); // end click 
	
	$(".content").click(
			function() {
				if (window.slideStatus === "1") {
				console.log("number");
				controller.click();
				
				}
			}
		);
	}
function introAnimation() {
	$(".keyFrame").each(
		function(index) {
			$(this).delay(350*index).animate(
				{
					opacity : 1
				}, 800, function() {
					
				}
			);
		}
	);
}
function scrollPage(once) {
	$(document).scroll(
	function() {
		var now = $(document).scrollTop();
		if(now>150 && once) {
			var target = $("#about");
			var pos = target.offset().top;
			$('html,body').animate({
				scrollTop: pos
			}, 500);
			once = false;
		}
		if(now<10) {
			once = true;
		}
	});
}


$(document).ready(
	function() {
		winHight = $(window).innerHeight();
		winWidth = $(window).innerWidth();
		once = true;
		if(winWidth > 64*16) {
			largeScreen(winHight, winWidth);
		} else {
			page(winHight, winWidth); 		
			introAnimation();	
			slideNav(winHight, winWidth);
			scrollPage(winHight);
		}
	}
);