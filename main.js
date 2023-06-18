$(document).ready(function() {
  console.log('main.js loaded')

  $('.header_info a').click(function(e) {
    $('.header_info').slideUp();
  });

  $('.carousel-images').slick({
    dots: true,
    autoplay: true
  }) 
  
  $('.navbar_menu').click(function(e) {
    e.preventDefault();
    $('.menu').animate({left: 'toggle',
    }, 50);
    $('body > div').toggleClass('body_page');
  }) 
})