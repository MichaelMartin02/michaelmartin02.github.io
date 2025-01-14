
$(function(){///call a function when the doc is ready

    
      


   
       if (!sessionStorage.isVisited) {
        sessionStorage.isVisited = 'true'
        $("#EnterBTN").css({"display":"flex"});
        $("footer").css({"display": "flex"});///set footer to flex, then hide it, so afte btn click it comes in correctly with flexbox
        $("footer").css({"display":"none"});
    
    $(".mobileNav").hide();
    $("body").css({"overflow-y":"hidden"});
        
        $("#EnterBTN").click(function () {///when button is clicked
    
           $(".Semi1").css({"filter":"drop-shadow(0px 0px 0px)", "left" : "calc(30% - 10px)", "top":"calc(12vh + 10px)"});
           $(".Semi2").css({"filter":"drop-shadow(0px 0px 0px)", "left" : "calc(30% - 10px)", "top":"calc(12vh + 10px)"});//button is clicked "in", removing drop shadow and moving
           setTimeout(()=>{
            $(".Semi1").css({"filter":"drop-shadow(-10px 10px 10px)", "left" : "30%", "top":"12vh"});
            $(".Semi2").css({"filter":"drop-shadow(-10px 10px 10px)", "left" : "30%", "top":"12vh"});
           },200)////bring the button back "up" to its default styling to make it look like a button click
    
          ///show the wave lines///
          setTimeout(()=>{
            $("span").show();
    
        
              
     
     
          
     
    
    
          }, 200)
    
    
    
    
          ///remove the button///
           setTimeout(()=>{
            $(".Semi1").css({"filter":"drop-shadow(0px 0px 0px", "background-color": "#FFF7C4"});
            $(".Semi2").css({"filter":"drop-shadow(0px 0px 0px", "background-color": "#FFF7C4"});
            $("#EnterBTN").css({"display":"none"});
            
            $(".OpenVideo").show();
            $(".Vid").trigger('play');
           },500)
    
    
       
    
           $(".Vid").on('ended', function(){
            $("body").css({"overflow-y":"scroll"})
            $(".OpenVideo").hide();
            $(window).width(function(){///if the window width is less than 1025px, dont load in the desktop nav
                $(".sliderWrapper").fadeIn(700, );
                $("main").fadeIn(700, );
                $("footer").fadeIn(700, );
                $(".Name").fadeIn(700, );
                if($(this).width() >= 1025){
            $(".nav").fadeIn(700 , );
            $('.mobileNav').hide();
                }
                else{
                    $('.nav').css({"display":"none"});
                    $('.mobileNav').fadeIn(700, );
                    }
                });
    
                $(window).resize(function(){//if a user is resizing the window past 1025px, show the nav.///
                    if($(this).width() >= 1000){
                $(".nav").fadeIn(700 , );
                $('.mobileNav').hide();
                $('.mGalleryPanel').hide();
                    }
                    else{
                        $('.nav').hide();
                        
                        $('.mobileNav').fadeIn(700, );
                        }
                    });
                    
    
    
    
         
    
    
          });
          
    
           });
      }
      else{
        $(".Name").show();
        $("body").css({"overflow-y":"scroll"})
        $(".OpenVideo").hide();
        $(window).width(function(){///if the window width is less than 1025px, dont load in the desktop nav
            $("main").fadeIn(200, );
            $(".sliderWrapper").fadeIn(200, );
            
            $("footer").show();
            $(".HeadLogo").show();
            if($(this).width() >= 1025){
        $(".nav").fadeIn(700 , );
        $('.mobileNav').hide();
            }
            else{
                $('.nav').hide();
                $('.mobileNav').fadeIn(700, );
                }
            });

            $(window).resize(function(){//if a user is resizing the window past 1025px, show the nav.///
                if($(this).width() >= 1000){
            $(".nav").fadeIn(700 , );
            $('.mobileNav').hide();
            $('.mGalleryPanel').hide();
                }
                else{
                    $('.nav').hide();
                    
                    $('.mobileNav').fadeIn(700, );
                    }
                });

      }
       
      

    
    
    
});
