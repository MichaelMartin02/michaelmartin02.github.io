$(function(){//call function when doc is ready
    $(".galleryBTN").click(function(){//call function when workBTN is clicked
        
        $("#galleryPanel").animate({///animate in the gallery panel//
            right:"0",
            height:"95%"
        }, 300,()=>{
            $(".galleryBTN").hide();
            $("body").css({"overflow-y":"hidden"})///remove scrolling from main page, only scrollbar becomes gallery scrolling//
        })
    })


$(".close").click(function(){
    $("#galleryPanel").animate({///animate out gallery
        right:"-100%",
        
    }, 300)
    $(".galleryBTN").show();///scrolling in main page again
    $("body").css({"overflow-y":"scroll"})
  
})

$(".aboutBTN").click(function(){
    $("#aboutPanel").animate({
        right:"0",
        height:"95%"
    }, 300,()=>{
        $(".aboutBTN").hide();
        $("body").css({"overflow-y":"hidden"})///remove scrolling from main page, only scrollbar becomes gallery scrolling//
    })




})
});