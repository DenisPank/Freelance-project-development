$(document).ready(function () {

    $('[data-fancybox]').fancybox();

    let swiper = new Swiper('.gallery-slider.swiper-container', {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 'auto',
        breakpoints: {
            992: {
                spaceBetween: 135,
            },
        }
    });
    let swiperCard = new Swiper('.card-content__slider.swiper-container', {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
    });

    $('.card-info__item').on('click', function () {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });
    $('.size-filter__item').on('click', function () {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });
    $('.close-basket').on('click', function () {
        $('.wrapper').removeClass('active');
        $('body').removeClass('lock');
    });
    $('.search-open').on('click', function (e) {
        e.preventDefault();
        $('.overlay-search').addClass('active');
    });
    $('.close-search').on('click', function () {
        $('.overlay-search').removeClass('active');
    });
    function animeBasket () {
        $('.basket-open').on('click', function (e) {
            e.preventDefault();
            if($(window).width() > 1199) {
                $('body').addClass('lock');
                $('.wrapper').addClass('active');
            }
        });
    }
    animeBasket ();

    $(window).scroll( function (){
        if($(window).scrollTop() > 109) {
            $('.header-row').addClass('active');
        } else {
            $('.header-row').removeClass('active');
        }

    });
    $(window).scroll( function (){
        if($(window).scrollTop() > 300) {
            $('.header-content').addClass('active').addClass('sticky');
        } else {
            $('.header-content').removeClass('active').removeClass('sticky');
        }

    });

    let iconMenu = $(".icon-menu");
    let iconMenuWrap = $(".header-icon-menu");
    let menuBody = $(".menu__body");
    let mainBody = $("body");
    if (iconMenu) {
        iconMenuWrap.on("click", function () {
            iconMenu.toggleClass("active");
            iconMenuWrap.toggleClass("active");
            mainBody.toggleClass("lock");
            menuBody.toggleClass("active");
            $('.header-content').addClass("active");
        });
    }
    let menuLink = $('.menu__list li a');
    menuLink.on('click', function () {
        iconMenu.removeClass("active");
        iconMenuWrap.removeClass("active");
        mainBody.removeClass("lock");
        menuBody.removeClass("active");
        $('.header-content').removeClass("active");
    });
    $('.close-menu').on('click', function () {
        iconMenu.removeClass("active");
        iconMenuWrap.removeClass("active");
        mainBody.removeClass("lock");
        menuBody.removeClass("active");
        if(!$('.header-content').hasClass('sticky')) {
            $('.header-content').removeClass("active");
        }
    });

    $('.filter-close').on('click', function () {
        $('.filter').addClass('close');
    });
    $('.filter-open').on('click', function () {
        $('.filter').removeClass('close');
    });


    $('.menu__body').on('click', function(e){
        if(!$(e.target).closest('.menu__list').length){
            iconMenu.removeClass("active");
            iconMenuWrap.removeClass("active");
            mainBody.removeClass("lock");
            menuBody.removeClass("active");
        }
    })
});