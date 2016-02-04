$(document).ready(function() {
    $('.nav-button').css({
        'z-index': '2'
    });
});
$(document).on('scroll', function(e) {
    var value = $(this).scrollTop();
    if (value < 200) {
        $('header').css({
            'height': '100px'
        });
        $('h1').css({
            'font-size': '75px'
        });
        $('.nav-button').css({
            'z-index': '2'
        });
        if ($('.menu').hasClass('open')) {
            $('.nav-button').css({
                'z-index': '75'
            });
            $('header').css('height', '60px');
            $('h1').css({
                'font-size': '30px'
            });
        }
    } else {
        $('header').css('height', '60px');
        $('h1').css({
            'font-size': '30px'
        });
        $('.nav-button').css({
            'z-index': '75'
        });
    }
});
$(document).ready(function() {
    var val = $(this).scrollTop();
    $('.nav-button').click(function() {
        $(this).toggleClass('open');
        $
        if (val < 200) {
            $('.nav-button').css({
                'z-index': '2'
            });
        }
    });
});
$(document).ready(function() {
    $('.nav-button').click(function() {
        $('.menu').toggleClass('open');
        $('.nav-button').css({
            'z-index': '75'
        });
    });
});
$(document).ready(function() {
    $('li').click(function() {
        $('.menu').toggleClass('open');
        $('.nav-button').css({
            'z-index': '2'
        });
        $('.nav-button').toggleClass('open');
    });
});