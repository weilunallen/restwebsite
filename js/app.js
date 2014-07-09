// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
function expend(x) {
	$('.popDown').hide();
	$(x).toggle();
}
function largeScreen(h,w) {
/*
	$('#main').height(
		w*(9/16)
	);	
*/
}

function pagePosition(w) {
	var page = $('.page:not(#slideNav)'); 
	var pageIds = new Array;
	var slideMe = $("#slideMe");
	
	
	//ini setup create data for postion in object
	page.each(
		function(index) {
			var thisPage = page.eq(index);
			var thisPos = w*index;
			thisPage.css({"left" : thisPos+"px"});
			var pageName = thisPage.attr('id');
			pageIds.push(
				{
					name : pageName,
					pos : thisPos
				}
			); 
		}
	);
	
	slideMe.click(
		function() {
			for(pageId in pageIds) {
				// get the anme of the object 
				console.log(pageId);
			}

			
		}
	);
		
	page.each(
		function(index) {
			
		}
	)
	
	
	 
}

function aboutPage() {
	$("#about p").animate(
		{"marginTop":"50px",
		 "opacity":"1"
		}, 1200
	);

	$("#timeTable").hover(
		function() {
			$(this).animate(
				{"bottom":"0px"}, 350,
				function() {
						$(this).animate(
						{"bottom":"-10px"}, 300);
				}
			);
		}, function() {
			$(this).animate({"bottom":"-7em"}, 400,
				function() {
					$(this).animate(
						{"bottom":"-6em"}, 300
					);
				}
			);
		}
	);
}

function nextPage() {

	var pages = new Array();
	var pages = ["intro","about","dimsum"]; // define array
	var count = page.length;
	var i = 0;
	
	for(i; i<count; i++) {
		var el = pages[i];
	}

	


	$(".swipe").swipe({
		swipe:function(event, direction, distance, duration, fingerCount) {
		
		if(
			$(this).attr('id')==="about" 
		) {
			console.log("this is "+$(this).attr('id')+" page");
		}
  }});
}

function page(h,w) {
	var page = $(".page");
	var wrapper = $("#mainWrapper");
	var fullWidth = $(".fullWidth");
	page.height(h).width(w);
	wrapper.height(h).width(w);
	
	fullWidth.width(w);
}
function slideNav(h,w) {

	var controller = $(".sandwich");
	var subject = $("#mainWrapper");
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
	/*
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
*/
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
			pagePosition(winWidth);	
			introAnimation();	
			slideNav(winHight, winWidth);
			scrollPage(winHight);
			aboutPage();
			nextPage();
		}
	}
);