$(document).ready(function () {

    //sticky menu
    $(window).on('scroll', function () {

        var scroll = $(window).scrollTop();
        if (scroll < 1) {

            $('.sticky').removeClass("scroll-header");

        } else {

            $('.sticky').addClass("scroll-header");

        }

    });







    // mobile-menu 
    $('#mobile-menu-active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu',

    });

    // slider Active
    $('.slider-active').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        dots: false,
        autoplaySpeed: 3000,
        slidesToScroll: 1
    });
    // testimonal Active
    $('.testimonal-active').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        dots: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1
    });
    // brand Active
    $('.brand-active').slick({
        infinite: true,
        slidesToShow: 5,
        arrows: false,
        autoplay: true,
        dots: false,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // wow js
    new WOW().init();


    // scrollup 
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="ti-arrow-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    // prograss bar
    var progressBar = document.querySelectorAll(".progress-bar");
    var time = 1500;
    progressBar.forEach(function (i) {
        let label = i.children[0];
        let line = i.children[1];
        let count = 0;
        let dataCount = label.getAttribute("data-count");
        let lineCount = line.children[0];

        let runTime = time / dataCount;

        let animationLineCount = setInterval(function () {
            if (count < dataCount) {
                count++;
                label.innerHTML = count + '%';
                lineCount.style.width = count + '%';
            }
        }, runTime);
    });







});