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










 
 






 
  new WOW().init();



