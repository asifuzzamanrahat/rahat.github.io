   jQuery(document).ready(function ($) {
        
        
       $('.owl_carousel').owlCarousel({
        loop:true,
        margin:30,
        dots:true,   
        nav:false,   
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })
       
       
       
       
       $('.owl-carousel').owlCarousel({
        loop:true,
        nav:false,
        dots:true,   
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
    })
       $('.logo-carousel').owlCarousel({
        loop:true,
        nav:false,
        dots:false,   
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    })
       
       $(".menu-trigger").on('click', function() {
        $(".off-canvus-menu").addClass("show-off-canvus-menu"); 
        $(".off-canvus-menu-shade").addClass("active");   
       });
       
       
       $(".menu-close, .off-canvus-menu-shade ").on('click', function() {
        $(".off-canvus-menu").removeClass("show-off-canvus-menu");
           $(".off-canvus-menu-shade").removeClass("active");
       });
       
       
       $(".single-test-box").hover(function() {
           $(".single-test-box").removeClass('active');
           $(this).addClass('active');
       });
       
       $(".video-play-btn").magnificPopup();
        type: 'video'
        
    });