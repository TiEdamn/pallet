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

    $('input[name="phone"]').inputmask('+375 (99) 999-99-99');

    $('.owl-slider').owlCarousel({
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

    $('body').on('click', '.toggle-contact', function(e) {
        e.preventDefault();

        $('.contact').toggleClass('active');
    });

    $(document).mouseup(function(e) {
        var el = $('header .contact');
        if (
            !el.is(e.target) &&
            el.has(e.target).length === 0 &&
            !$(e.target).hasClass('toggle-contact')
        ) {
            el.removeClass('active');
        }
    });

    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
        callbacks: {
            beforeOpen: function() {
                if ($(window).width() < 768) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
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
