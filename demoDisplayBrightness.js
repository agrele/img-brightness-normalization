function demoDisplayBrightness(div) {
	/* This function is here just for the demo,
	to show, upon hover, how bright the original image was.
	Remove that if you want to use the code yourself. */
	div.insertAdjacentHTML('afterbegin', '<div class="brightness-text"></div>')
	var brightness = div.dataset.brightness
	var imageUrl = div.dataset.backgroundImage
	var lumtext = div.querySelector('.brightness-text')
	lumtext.innerText = "Source lum : " + Math.floor(brightness*100) + "%"
	div.onmouseenter = function() {
		this.style.background =  `url(${div.dataset.backgroundImage})`
	}
	var darkOverlayOpacity = brightness / 1.25
	div.onmouseleave = function() {
		this.style.background =  `
			linear-gradient(rgba(0,0,0,${darkOverlayOpacity}),
			rgba(0,0,0,${darkOverlayOpacity})),
			url(${imageUrl})
			`
	}
}