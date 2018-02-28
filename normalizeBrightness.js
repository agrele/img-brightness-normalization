
function normalizeBrightness(coeff=1, callback=null) {

	document.querySelectorAll('.normalize-brightness').forEach(function(div) {

		/* Create the dark overlay that will cover the div */
		div.insertAdjacentHTML('afterbegin', '<div class="dark-overlay"></div>')
		
		/* Selects the overlay for manipulation later on */
		var darkOverlay = div.querySelector('.dark-overlay')

		/* Get the div's image background url and apply to the style */
		var imageUrl = div.dataset.background
		div.style.backgroundImage = "url('" + imageUrl + "')"

		/* Prepare a dom image for canvas manipulation*/
		var background = new Image()
		background.src = imageUrl

		/* When the dom image loads, proceed with the calculations */
		background.onload = function() {

			var brightness = getBrightness(background)
			div.dataset.brightness = brightness

			/* The more opaque the overlay, the darker the image.
			A coefficient of 1 will equate the overlay's opacity with the image's brightness.
			A higher coefficient will leave more room for differences between the images, but 
			will avoid darkening your images too much. */
			darkOverlay.style.opacity = brightness / coeff

			/* In case you want to do something else with that div, while you're at it*/
			callback(div)

		}
	})		
}


function getBrightness(img) {

	/* Returns a brightness value between 0 and 1 based on the image's brightness */

	var rgb = getAverageColor(img)
	var brightness255 = (rgb.r * 2 + rgb.g *3 + rgb.b) / 6
	var brightness = brightness255 / 255
	return brightness

}

function getAverageColor(img) {

	/* Returns an RGB object of an image's average color */

	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');
	var width = canvas.width = img.naturalWidth;
	var height = canvas.height = img.naturalHeight;

	ctx.drawImage(img, 0, 0);

	var imageData = ctx.getImageData(0, 0, width, height);
	var data = imageData.data;
	var r = 0;
	var g = 0;
	var b = 0;

	for (var i = 0; i < data.length; i += 4) {
		r += data[i];
		g += data[i+1];
		b += data[i+2];
	}

	r = Math.floor(r / (data.length / 4));
	g = Math.floor(g / (data.length / 4));
	b = Math.floor(b / (data.length / 4));

	return { r: r, g: g, b: b };

}