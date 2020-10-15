var initial = false;
var colorarray = [
	"#D81B60", "#8E24AA", "#E53935", "#5E35B1", "#3949AB",
	"#1E88E5", "#039BE5", "#00ACC1", "#00897B", "#43A047"
]
function email() {
	window.open('mailto:jamestrombo@gmail.com');
}
function backgroundColor() {
	console.log("her");
	randcolor = colorarray[Math.floor(Math.random()*colorarray.length)];
	randcolor2 = colorarray[Math.floor(Math.random()*colorarray.length)];
	$(".link").css('color', randcolor2);
	if (!initial){
		$(".headercontent").css({ backgroundColor: randcolor,});
		$("#resume").css({ backgroundColor: randcolor2,});
	}
	if (initial) {
		$(".headercontent").velocity({
				backgroundColor: randcolor,
				}, {
				duration: 1000,
			});	
	intial = true;
}
}	

headerup = false;
window.addEventListener('scroll', function(e) {
	console.log(window.scrollY);
	if (headerup == false && window.scrollY >= 50){
	    headerup = true;
	    document.getElementsByTagName('header')[0].className = 'trigger'; 
	    $("#resume").css({ 'clip-path': 'polygon(0 0%, 100% 30%, 100% 85%, 0 100%)', 'top': '-50vh'});
	    $(".headercontent").css({ 'clip-path': 'polygon(0 0, 100% 0, 100% 85%, 0 75%)'});
	    
	} 
	else if (headerup == true && window.scrollY <= 50){
	    headerup = false;
	    document.getElementsByTagName('header')[0].className = 'untrigger';
	    backgroundColor();
	    $("#resume").css({ 'clip-path': 'polygon(0 28%, 100% 0, 100% 62%, 0 95%)', 'top': '0vh'});
	    $(".headercontent").css({ 'clip-path': 'polygon(0 0, 100% 0, 100% 80%, 0 100%)'});
	}
});
setInterval(backgroundColor(), 3000);