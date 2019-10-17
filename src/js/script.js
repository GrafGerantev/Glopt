$(document).ready(function(){
    /*Slider*/
    $('.reviews-carousel').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    /* dots: true */
                    arrows: false
                }
            }
        ]
    });

    $(window).scroll(function () {
        if($(this).scrollTop() > 727) {
            $('.header').addClass('header-fixed');
        }
        else {
            $('.header').removeClass('header-fixed');
        }
        if ($(this).scrollTop() > 1400) {
            $('.pageup').fadeIn();
        }
        else {
            $('.pageup').fadeOut();
        }
    });
    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    //Плавное появление в связке с animated.css
    /*new WOW().init();*/
});