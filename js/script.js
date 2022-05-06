$(document).ready(function(){

    $('.slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:6000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    
    $('.cat-carousel').owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        animateOut: 'animate__backOutDown',
        animateIn: 'animate__backInDown',
        items:1,
        margin:30,
        autoplayTimeout:8000,
        stagePadding:30,
        smartSpeed:450
    });

    $('.banner').hover(function(){
        $('.banner h1').hide().text("Hand made with love..").fadeIn(1500);
    },function(){
        $('.banner h1').hide().text("Meraki").fadeIn(1500);
    });

    // Mobile Menu
    $('.burger').click(function(){
        $('.mobile-nav').css('transform','translateX(0)');
    });
    $('.mob-m-close').click(function(){
        $('.mobile-nav').css('transform','translateX(-100%)');
    });

    // if object is in view port
    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
      
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
      
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    // counter work on viewport
    $(window).on('resize scroll', function() {
    if ($('#c1').isInViewport()) {
        $('#c1').prop('Counter',0).animate({
            Counter: '355'
        },
        {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
               console.log($(this).text(Math.ceil(now)));
            }
        });
    
        $('#c2').prop('Counter',0).animate({
            Counter: '234'
        },
        {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
               console.log($(this).text(Math.ceil(now)));
            }
        });
    
        $('#c3').prop('Counter',0).animate({
            Counter: '90'
        },
        {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
               console.log($(this).text(Math.ceil(now)));
            }
        });
    
        $('#c4').prop('Counter',0).animate({
            Counter: '95'
        },
        {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
               console.log($(this).text(Math.ceil(now)));
            }
        });
    
       
    }
});


});
