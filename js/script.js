$(document).ready(function(){

    $('#food_slider').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dotsEach:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })


    $('#testi_slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        navText: ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
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

    
    


    var owl = $('#banner');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function(event) {
         new WOW().init();
    })


    


    
    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 30) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
      });


      wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
        }
        )
        wow.init();

});