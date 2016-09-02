function email() {
	window.open('mailto:jamestrombo@gmail.com');
}
window.addEventListener('scroll', function(e) {
	console.log(window.scrollY);
	if (window.scrollY >= 100){
	    document.getElementsByTagName('header')[0].className = 'trigger';
	}
});