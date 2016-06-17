var link = document.getElementById('button');
link.onclick = function() {
    // Stop scrolling if it's already going on to prevent glitchiness
    clearInterval(scroll);
    // Get current section
	var prevSection = window.innerHeight * Math.floor(document.body.scrollTop / window.innerHeight);
    // Scroll down tiny amounts at interval of 1ms for smooth scrolling effect
	var scroll = setInterval(function() {
        // Scroll down 8 pixels
		document.body.scrollTop += 8;
        // If it's scrolled to or past 1 section above the previous one, or it's reached the bottom/a border between two sections, end scrolling
		if (window.innerHeight * Math.floor(document.body.scrollTop / window.innerHeight) - 1 >= prevSection || document.body.scrollTop % window.innerHeight === 0) {
            // Stop animation
			clearInterval(scroll);
            // Go to exactly the target section in case scrolling overshot
			document.body.scrollTop = prevSection + window.innerHeight;
			clearInterval(scroll)
		}

	}, 1);
};

// Hide button when at bottom of page and show it if not
window.onscroll = function() {
	if (document.documentElement.scrollHeight === document.body.scrollTop + window.innerHeight) {
		clearInterval(scroll)
		link.style.opacity = 0;
	} else {
		link.style.opacity = 1;	
		clearInterval(scroll)

	}
};