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
       
       
       $('.home-slides').owlCarousel({
        loop:true,
        dots:true,   
        nav:true,
        navText:["<i class='zmdi zmdi-arrow-left'></i>","<i class='zmdi zmdi-arrow-right'></i>"] ,  
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
        
    });