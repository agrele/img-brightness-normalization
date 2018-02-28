# Image brightness / luminosity normalizer for text over image

In a work project, the UI guys had defined large parts of the interface as text over image. To improve legibility, I experimented with ways to automatically darken an image based on its original brightness.

## How to use

### Step 1

Add a `data-background-image` attribute to the element, with the image URL as value.

Example : `<div data-background-image="images/photo-1446770145316-10a05382c470.jpg"></div>`

### Step 2

Add the CSS and JS files to your page :

    <link rel="stylesheet" href="https://antoningrele.github.io/img-brightness-normalization/normalizeBrightness.css" type="text/css">
    <script onload="normalizeBrightness();" src="https://antoningrele.github.io/img-brightness-normalization/normalizeBrightness.js"></script>

### Step 3 (optional)

You can configure the following attributes when calling `normalizeBrightness()` :

*	**coeff** (default=1.25) : the dark overlay's opacity is equal to the images brightness divided by this value. A value of "1" means the image brightness is compensated for entirely (a pure white image would become black). Higher values reduce the intensity of the filter.

*	**callback** (default=null) : called at the end of the brightness calculations, is given the darkened element as an argument. It's used in the demo to display the source luminosity, for example

## Demo

[https://antoningrele.github.io/img-brightness-normalization/](https://antoningrele.github.io/img-brightness-normalization/)

You can hover over an image to view it without the overlay, and see the percentage brightness found by the calculation.

## Credits 

*Credits to [matkl](https://github.com/matkl/average-color/) for the "average" color calculation and to [Franci Penov](https://stackoverflow.com/a/596241/3083792) for the brightness calculation based on that color.*