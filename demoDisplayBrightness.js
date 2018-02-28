function demoDisplayBrightness(div) {
	/* This function is here just for the demo,
	to show, upon hover, how bright the original image was.
	Remove that if you want to use the code yourself. */
	div.insertAdjacentHTML('afterbegin', '<div class="brightness-text"></div>')
	var lumtext = div.querySelector('.brightness-text')
	lumtext.innerText = "Source lum : " + Math.floor(div.dataset.brightness*100) + "%"
}