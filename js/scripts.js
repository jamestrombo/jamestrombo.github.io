function email() {
	window.open('mailto:jamestrombo@gmail.com');
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
	}
});