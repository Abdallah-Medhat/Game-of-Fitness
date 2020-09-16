   $(document).ready(function(){
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
                    
                    $(".overlay1").click(function(){
                    $(".panel").slideToggle(1500);
                    
                     
                });
                    
                    $(".overlay1").on({
        mouseenter: function(){
            $(this).css("background-color", "rgba(0,0,0,.6)" );
            $(".overlay1").text("click me!");
        },
          mouseleave: function(){
            $(this).css("background-color", "rgba(0,0,0,.1)");
              $(".overlay1").text("What is Skinny fat?");
        },
                        
                  });  
        
                    
                    $(".overlay3").click(function(){
                    $(".panel1").slideToggle(1500);
                    
                });
                    
                    $(".overlay3").on({
        mouseenter: function(){
            $(this).css("background-color", "rgba(0,0,0,.6)" );
            $(".overlay3").text("click me!");
        },
          mouseleave: function(){
            $(this).css("background-color", "rgba(0,0,0,.1)");
              $(".overlay3").text("Some common mistakes we follow.");
        }
                  });
                    
                      $(".overlay2").click(function(){
                    $(".panel2").slideToggle(1500);
                    
                });
                    
                    $(".overlay2").on({
        mouseenter: function(){
            $(this).css("background-color", "rgba(0,0,0,.6)" );
            $(".overlay2").text("click me!");
        },
          mouseleave: function(){
            $(this).css("background-color", "rgba(0,0,0,.1)");
              $(".overlay2").text("What can I do for this?");
        }
                  });  
                      $(".overlay4").click(function(){
                    $(".panel3").slideToggle(1500);
                    
                });
                    
                   $(".overlay4").on({
        mouseenter: function(){
            $(this).css("background-color", "rgba(0,0,0,.6)" );
            $(".overlay4").text("click me!");
        },
          mouseleave: function(){
            $(this).css("background-color", "rgba(0,0,0,.1)");
              $(".overlay4").text("-SKINNY FAT TIPS!");
        }
                  }); 
                    
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
