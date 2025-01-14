

$(function(){
$(window).on('scroll', function(){
if ($(window).scrollTop()>=95 && !$('.nav').hasClass('sticky')){
    $(".nav").addClass('sticky');
}
else if ($(window).scrollTop()<95 && $('nav').hasClass('sticky')){
    $('nav').removeClass('sticky') 
}
});

////this is useless but if we want to change something about the navbar when you scroll, maybe we can come back to this. until then, the navbar can just stay fixed at the top w/ infinite z index.


});