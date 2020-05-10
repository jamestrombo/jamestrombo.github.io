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
	randcolor = colorarray[Math.floor(Math.random()*colorarray.length)]
	$("#resume").css('color', randcolor);
	if (!initial){
		$("#header").css({ backgroundColor: randcolor,});
	}
	if (initial) {
		$("#header").velocity({
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
	} 
	else if (headerup == true && window.scrollY <= 50){
	    headerup = false;
	    document.getElementsByTagName('header')[0].className = 'untrigger';
	    backgroundColor();
	    
	}
});
setInterval(backgroundColor(), 3000);