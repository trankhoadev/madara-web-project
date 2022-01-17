/* OwlCarousel */

/* Preloader */
$(window).on('load', function() {
    if($('.cover').length){
        $('.cover').parallax({
            imageSrc: $('.cover').data('image'),
            zIndex: '1'
        });
    }

    $("#preloader").animate({
        'opacity': '0'
    }, 2000, function(){
        setTimeout(function(){
            $("#preloader").css("visibility", "hidden").fadeOut();
        }, 300);
    });
});


$('#slideTitle').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout:4000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },

        400:{
            items:1
        },

        700:{
            items:2
        },

        1000:{
            items:2
        }
    }
})


$('#slideUpdate').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: false,
    responsive:{
        0:{
            items:1
        },

        400:{
            items:1
        },

        600:{
            items:2
        },

        1000:{
            items:4
        }
    }
})