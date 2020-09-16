$(document).ready(function () {
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
    ///////////////////////////////////////////////////////////
    $(".main").slideDown("slow");
    $(".main h3").mouseenter(function(){
        $(this).css({transform: 'scale(2)',});
            $(".main h3").mouseleave(function(){
                $(this).css({transform: 'scale(1)',});
            });
    });
    /*-----------------*/
    $(".main .div1 .img1").mouseenter(function(){
        $(this).css({transform: 'scale(1.5)',});
            $(".main .div1 .img1").mouseleave(function(){
                $(this).css({transform: 'scale(1)',});
            });
    });
    $(".main .div1 .para1").mouseenter(function(){
        $(this).css({transform: 'scale(1.2)',});
        $("body").children().children().children(':not(".para1")').fadeTo("fast", 0.1);
            $(".main .div1 .para1").mouseleave(function(){
                $(this).css({transform: 'scale(1)',});
                $("body").children().children().children(':not(".para1")').fadeTo("slow", 1);
            });
    });
    /*---------------*/
    $(".main .div2 .img2").mouseenter(function(){
        $(this).css({transform: 'scale(.8)',});
            $(".main .div2 .img2").mouseleave(function(){
                $(this).css({transform: 'scale(1)',});
            });
    });
    $(".main .div2 .para2").mouseenter(function(){
        $(this).css({transform: 'scale(1.2)',});
        $("body").children().children().children(':not(".para2")').fadeTo("fast", 0.1);
            $(".main .div2 .para2").mouseleave(function(){
                $(this).css({transform: 'scale(1)',});
                $("body").children().children().children(':not(".para2")').fadeTo("slow", 1);
            });
    });
    /*-------------*/
    $(".main .div3 .img3").mouseenter(function(){
        $(this).css({transform: 'scale(1.5)',});
            $(".main .div3 .img3").mouseleave(function(){
                $(this).css({transform: 'scale(1)',});
            });
    });
    $(".main .div3 .para3").mouseenter(function(){
        $(this).css({transform: 'scale(1.2)',});
        $("body").children().children().children(':not(".para3")').fadeTo("fast", 0.1);
            $(".main .div3 .para3").mouseleave(function(){
                $(this).css({transform: 'scale(1)',});
                $("body").children().children().children(':not(".para3")').fadeTo("slow", 1);
            });
    });
    /*-----------------*/
    $(".main .div4 .img4").mouseenter(function(){
        $(this).css({transform: 'scale(.8)',});
            $(".main .div4 .img4").mouseleave(function(){
                $(this).css({transform: 'scale(1)',});
            });
    });
    $(".main .div4 .para4").mouseenter(function(){
        $(this).css({transform: 'scale(1.2)',});
        $("body").children().children().children(':not(".para4")').fadeTo("fast", 0.1);
            $(".main .div4 .para4").mouseleave(function(){
                $(this).css({transform: 'scale(1)',});
                $("body").children().children().children(':not(".para4")').fadeTo("slow", 1);
            });
    });
    /*----------------*/
    $(".main .div5 .img5").mouseenter(function(){
        $(this).css({transform: 'scale(1.5)',});
            $(".main .div5 .img5").mouseleave(function(){
                $(this).css({transform: 'scale(1)',});
            });
    });
    $(".main .div5 .para5").mouseenter(function(){
        $(this).css({transform: 'scale(1.2)',});
        $("body").children().children().children(':not(".para5")').fadeTo("fast", 0.1);
            $(".main .div5 .para5").mouseleave(function(){
                $(this).css({transform: 'scale(1)',});
                $("body").children().children().children(':not(".para5")').fadeTo("slow", 1);
            });
    });
    /*--------------*/
    $(".main .div6 .img6").mouseenter(function(){
        $(this).css({transform: 'scale(.8)',});
            $(".main .div6 .img6").mouseleave(function(){
                $(this).css({transform: 'scale(1)',});
            });
    });
    $(".main .div6 .para6").mouseenter(function(){
        $(this).css({transform: 'scale(1.2)',});
        $("body").children().children().children(':not(".para6")').fadeTo("fast", 0.1);
            $(".main .div6 .para6").mouseleave(function(){
                $(this).css({transform: 'scale(1)',});
                $("body").children().children().children(':not(".para6")').fadeTo("slow", 1);
            });
    });
    /////////////////////////////////////////////
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