$(document).ready(function() {
    $(window).on('load scroll', function(e) {
        var scroll = document.documentElement.scrollTop;
        if (scroll == 0) scroll = window.pageYOffset;

        if (scroll > 100) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });

    var owl = $('.owl-slider');

    owl.owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        onInitialized: dotNumbers,
        onRefreshed: sliderAnimation,
        onTranslated: sliderAnimation
    });
});

function sliderAnimation(e) {
    $(e.target)
        .find('.owl-item:not(.active) .animated')
        .each(function() {
            var classname = $(this).data('animation');
            $(this).removeClass(classname);
        });

    $(e.target)
        .find('.owl-item.active .animated')
        .each(function() {
            var classname = $(this).data('animation');
            $(this).addClass(classname);
        });
}

function dotNumbers(e) {
    $(e.target)
        .find('.owl-dot')
        .each(function() {
            $(this)
                .find('span')
                .text('0' + ($(this).index() + 1));
        });
}
