(function($) { 

    "use strict";
    jQuery(document).ready(function($){
     
        $(".case-studies-item").owlCarousel({
            items:3;
            margin:30;
            loop:true;
            nav:false;
            dots:true;
        });
        
        $(".testimonial-item").owlCarousel({
            items:1;
            loop:true;
            dots:true;
            nav:false;
        });
        
        jQuery(window).load(function(){
            
        });
    });
});
