$(window).on('load',function() {
$('.load').fadeOut(1000);
});

var owl = $('.slide-one');
  owl.owlCarousel({
          autoplay:true,
       loop:true,
    margin:5,
   responsiveClass:true,
    responsive:{
        0:{
            items:1,
           
        },
        600:{
            items:2,
       
        },
        1000:{
            items:4,
      
}}});




//
//
//$('li:nth-child(2)').click(function(){
//	$("ul:nth-child(2)").toggle("slow");
//	$("li").mouseleave(function(){
//    $("ul:nth-child(2)").hide("slow");
//});
//	
//});
//
//$('li:nth-child(3)').click(function(){
//	$("ul:nth-child(3)").toggle("slow");
//	$("li").mouseleave(function(){
//    $("ul:nth-child(3)").hide("slow");
//
//	
//});
//});
//$('li:nth-child(4)').click(function(){
//	$("ul:nth-child(4)").toggle("slow");
//	$("li").mouseleave(function(){
//    $("ul:nth-child(4)").hide("slow");
//});
//	
//});
//
//$(".mail").hover(function(){
//    $(".m").css("display","block");
//	});
//	
//$('.phone').click(function(){
//	$(".pp").toggle("slow");
//	});
//
//
//





 
 






 
  new WOW().init();



