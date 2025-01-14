$(function(){///call a function when the doc is ready

    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > $(window).height()){
            $(".NavLogo").fadeIn(700 , );
        }
        else{
            $(".NavLogo").hide();
            
        }
});
});