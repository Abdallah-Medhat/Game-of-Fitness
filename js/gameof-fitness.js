$(document).ready(function() {
	$(".name h1").hover(function(){
	$(this).css({
		
		transform:'scale(1.5)'
	});
		
	},function(){
		$(this).css({
			transform:'scale(1)',
		});
		/* start animation for header */
		$(".name h1").hover(function(){
			/*start animate for header*/
			$(this).animate({
			bottom:'100px',
				opacity:'.5',
			fontWeight:'bold'

				/*second*/
			},2000);
			$(this).animate({
				top:'80px',
			},2000);
			/*third animate*/
			$(this).animate({
				bottom:'50px',
			},2000);
			/*fourth animate*/
			$(this).animate({
			top:'-40px',
			opacity:'1',
			},2000);
			
		});
		/*end animate for header */
		
	});
	/*start scale for li */
	$(".nav ul li").mouseenter(function() {
		$(this).css
	({
		transform: 'scale(1.5)'
	});
	$(".nav ul li").mouseleave(function(){
		$(this).css({
			
			transform: 'scale(1)',
		});
		
		
	});
	});
	/* end scale for li */});
	
	
	$(".nutrio").first().mouseenter(function(){
		$(this).fadeOut(3000);
		});
		$(".nutrio").first().mouseleave(function(){
			$(this).fadeIn(3000);
			/*start animation for nutrio => calcualte*/
			$(this).animate
			({
				left:'100px'
			},2000);
			$(this).animate
			({
				top:'50px',
			},2000);
			$(this).animate
			({
				left:'-100px'
			},2000);
			$(this).animate
			({
				top:'-20px'
			},2000);
			$(this).animate
			({
				left:'20px'
			},2000);
			$(this).animate
			({
			top:'20px'
			},2000);
			/*end animate for nutrio => calcualte*/
	});
	$(".img-header").mouseenter(function(){
		//strat anination for imgheader
		
	$(this).css("border","10px solid #ff9999");
	$(this).animate({width:'50%',marginLeft:'50px'},5000);
	$(this).animate({width:'100%',marginLeft:'0'},5000);
	$(".overlay~h1,h3,span,p").animate({opacity:'.5'},5000)	;$(".overlay~h1,h3,span,p").animate({opacity:'1'},5000);

		
});
$(".img-header").mouseleave(function(){
	$(this).css("border","10px solid #FFF");
});
$(".fitnes").mouseenter(function(){
	
	$(this).animate({
		height:'+=100px'
	},3000);$(this).animate({
		height:'-=100px',
		borderRadius:'20px'
	},3000);$(this).animate({
		borderRadius:'0',
		opacity:'.5'
	},3000);$(this).animate({
		opacity:'1',
		
	},3000);
});
$(".cont-img").click(function(){
	$(this).find(".wood").animate({
		height:'+=100px',
		padding:'20px',
	},3000);
	$(this).find(".wood").animate({
		height:'-=100px',
	},3000);
	
});
$(".wood").mouseenter(function(){
	$(".wood h3:only-of-type").css("color","#FFCC66");
	$(".wood span:only-of-type").css("color","#FFCC66")


});$(".wood").mouseleave(function(){
	$(".wood h3:only-of-type").css("color","#FFF");
	$(".wood span:only-of-type").css("color","#FFF")



});
// start weight loss change color border 
$(".m").hover(function(){
	$(this).animate({bottom:'50px'},5000);	$(this).animate({top:'100px'},5000);
	$(this).animate({bottom:'100px'},5000);
	$(this).animate({top:'-100px'},5000);

	
	

});
$(".m").mouseenter(function(){
	$(".m").find(".weight-loss a img:only-of-type").css("border","10px solid #99c2ff");
});
$(".m").mouseleave(function(){
	$(".m").find(".weight-loss a img:only-of-type").css("border","10px solid #DDD");
});
// her end weight loss change color border 
//start skinny fat  change color border
$(".m").mouseenter(function(){
	$(".m").find(".skinny a img:only-of-type").css("border","10px solid #b8b894");
});
$(".m").mouseleave(function(){
	$(".m").find(".skinny a img:only-of-type").css("border","10px solid #DDD");
});
//her end skinny fat  change color border
// her start weight loss  change color border
$(".m").mouseenter(function(){
	$(".m").find(".weight a img:only-of-type").css("border","10px solid #ff5050");
});
$(".m").mouseleave(function(){
	$(".m").find(".weight a img:only-of-type").css("border","10px solid #DDD");
});

$(".about-us").mouseenter(function(){
	$(this).animate({
		width:'50%',
		margin:'10%'
	},3000);
	$(this).animate({width:"100%",margin:"0"},3000)
});
$(".about-us").mouseenter(function(){
	$(".about-us").css("border","5px solid #cc9900");
	$(".about-us").find("p").css(
		{"color":"#cc9900","line-height": "1.5",});
	
});
$(".about-us").mouseleave(function(){
	$(".about-us").css("border","0 solid #FFF");
	$(".about-us").find("p").css(
		{"color":"#FFF","line-height": "2.5"});
	
});
$(".about-us").mouseenter(function(){
$(".about-us span:only-of-type").css({"color":"#a68059"});
	
});$(".about-us").mouseleave(function(){
$(".about-us span:only-of-type").css({"color":"#ff8000"});
	
});

// show and hide for img header
//start footer jquery
$(".footerlast .left p ").mouseenter(function() {
        $(this).css({transform: 'scale(1.5)',});
            $(".footerlast .left p ").mouseleave(function() {
                $(this).css({transform: 'scale(1)',});
        });
    });
    /*------*/
    $("li").mouseenter(function () {
        $(this).css({transform: 'scale(1.1)',});
            $("li").mouseleave(function() {
                $(this).css({transform: 'scale(1)',});
        });
    });
