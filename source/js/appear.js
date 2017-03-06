
$(document).ready(function(){

    $('.works_sc').click(function(){
        $('html, body').animate({
            scrollTop: $('footer').offset().top
        },500);
    });
    $('.service_sc').click(function(){
        $('html, body').animate({
            scrollTop: $('.services').offset().top
        },500);

    });
    $('.about_me_sc').click(function(){
        $('html, body').animate({
            scrollTop: $('.about_me').offset().top
        },500);
    });
    $('.clients_sc').click(function(){
        $('html, body').animate({
            scrollTop: $('.reviews').offset().top
        },500);
    });
    var touch = $('#drop-down-menu');
    var menu = $('.main');

    $(touch).on('click',function(e){
       e.preventDefault();
       menu.slideToggle();
    });
var wid = $(window).width();
         if (wid > 1025 ){
             $('.main1').show();
             $('.main2').show();
             $('.main3').show();
             $('.main4').show();
        }
        else if (wid < 1024 ){
             $('.menu1').click(function(e){
                 e.preventDefault();
                 $('.main1').slideToggle();
             });
             $('.menu2').click(function(e){
                 $('.main2').slideToggle();
             });
             $('.menu3').click(function(e){
                 e.preventDefault();
                 $('.main3').slideToggle();
             });
             $('.menu4').click(function(e){
                 e.preventDefault();
                 $('.main4').slideToggle();
             });
         }

    $( window ).resize(function() {
        var wid = $(window).width();
        if (wid > 1025 ){
             $('.main1').show();
             $('.main2').show();
             $('.main3').show();
             $('.main4').show();
        }
    });
});