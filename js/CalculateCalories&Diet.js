$(document).ready(function() {
   $(".header").animate({ top : '0px' },"slow");
    $(".header .name h1").mouseenter(function() {
        $(this).css({transform: 'scale(2)',});
        $(".header .name .border").hide(1000);
            $(".header .name h1").mouseleave(function() {
                $(this).css({transform: 'scale(1)',});
                $(".header .name .border").show(1000);
            });
    });
    $(".header .nav .span").hover(
        function()
        {
            $(".header .nav .border2").fadeOut(500);
            $(".header .nav .nutrio").fadeOut(200);
        }
        ,
        function()
        {
            $(".header .nav .border2").fadeIn(200);
            $(".header .nav .nutrio").fadeIn(500);
        }
    );
//////////////////////////////////////////
$(".main").fadeTo(1000,1);
$(".main .D .divR").slideDown(5000);
$(".main .D .divL").slideDown(5000);
/////////////////////////////////////////
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
});