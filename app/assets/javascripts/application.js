// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready (function(){
  
  $( '#contact-form,#contact-form h2,#contact-form span,#contact-form form,footer ul,footer input' ).css('visibility', 'hidden');

  $( "#work-with-us" ).click(function() {
    $( "#contact-form:not(#contact-form h2)" ).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},500);
    $( "#contact-form h2" ).css({opacity: 0.0, visibility: "visible"}).delay(500).animate({opacity: 1.0},500);
    $( "#contact-form span").each(function(i){
       $(this).css({opacity: 0.0, visibility: "visible"}).delay(1000).delay(500*i).animate({opacity: 1.0},500);
    });
    $( "#contact-form form" ).css({opacity: 0.0, visibility: "visible"}).delay(2500).animate({opacity: 1.0},500);

  });

  $(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height  > 1) {
      $( 'footer ul, footer input[type="button"]' ).css({opacity: 0.0, visibility: "visible"}).delay(0).animate({opacity: 1.0},500);
    } else {
    $('footer ul, footer input[type="button"]').css({opacity: 1, visibility: "visible"}).animate({opacity: 0},500);
    }
    });

});