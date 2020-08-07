(function($){
    'use strict';
    // Code Here
    
	$('.owl-carousel').owlCarousel({
            loop: true,
            responsiveClass:true,
            nav: true,
            navText : ['<span><i class="fas fa-arrow-left"></i></span>','<span><i class="fas fa-arrow-right"></i></span>'],
            dots: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items:1,
            smartSpeed:450,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:true
                },
                1000:{
                    items:1,
                    nav:true,
                    loop:true
                }
            }  
        })

    $(".sm-menu-bar i").on('click', function(){
        $(".menu").animate({
            "left":"0"
        },500);
    })
    $(".menu .close i").on('click', function(){
        $(".menu").animate({
            "left":"-255"
        },500);
    })
	
}) (jQuery);