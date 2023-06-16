$(document).ready(function() {
  console.log('main.js loaded')

  $('.header_info a').click(function(e) {
    $('.header_info').slideUp();
  })
})