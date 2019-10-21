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
    //Smooth scroll and pageup
    $(window).scroll(function () {
        if($(this).scrollTop() > 727)  {
            if($('header').hasClass('header-fixed')){}
            else {
                $('.header').fadeOut(0).addClass('header-fixed').fadeIn();
            }
        }
        else {
            $('.header').removeClass('header-fixed', 300);
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
        $("html, body").animate({
            scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    //Плавное появление в связке с animated.css
    /*new WOW().init();*/
    $('.burger').on('click', function() {
        $(this).toggleClass('burger_active');
        $('.header__nav').toggleClass('header__nav_active');
    });
    $('.header__link').on('click', function() {
        $('.header__nav').toggleClass('header__nav_active');
        /*console.log(this);*/
        $('.burger').toggleClass('burger_active');
    });

    //Catalog
    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__first').eq(i).toggleClass('catalog-item__first_active');
                $('.catalog-item__second').eq(i).toggleClass('catalog-item__second_active');
                /*console.log(this);*/
            });
        });
    };
    toggleSlide('.catalog-button');
    toggleSlide('.catalog-back');
    //Modal
    $('[data-modal=payment]').on('click', function () {
        $('.overlay, #payment').fadeIn('slow');
        $('body').addClass('no-scroll');
    })
    $('.modal__close').on('click', function () {
        $('.overlay, #payment').fadeOut('slow');
        $('body').removeClass('no-scroll');
    });

    //Validate Form
    function valideForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                /*name: "required",*/
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                /*name: "Пожалуйста введите свое имя",*/
                name: {
                    required: "Пожалуйста введите свое имя",
                    minlength: jQuery.validator.format("Введите не менее {0} символа!")
                },
                phone: "Пожалуйста введите свой телефон",
                email: {
                    required: "We need your email address to contact you",
                    email: "Введите адрес как на примере <br> name@domain.com"
                }
            }
        });
    };
    valideForms('#consultation-form');
    valideForms('#questions-form');
    valideForms('#modal-form');

    //Mask phone in form
    $('input[name=phone]').mask("+7 (999) 999-99-99");

    //Form submission
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#payment, #overlay').fadeOut();
            $('body').removeClass('no-scroll');
            $('form').trigger('reset');
        });
        return false;
    });
});
