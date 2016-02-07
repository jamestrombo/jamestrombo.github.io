$(document).on('scroll', function(e) {
var value = $(this).scrollTop();
    if (value < 200) {
    	$('lmao').toggleClass('open');
    });
});