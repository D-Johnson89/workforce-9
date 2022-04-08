const slideshowImages = document
	.querySelectorAll(".slider .slide")
	.forEach((slide) => {
		slide.style.opacity = 1;
	});

const nextImgDelay = 2500;
let curImgCount = 0;

//slideshowImages[curImgCount].style.opacity = 1;

setInterval(nextImage, nextImgDelay);

function nextImage() {
	const sliders = document.querySelectorAll(".slider");
	for (const slider of sliders) {
		const slideshowImages = slider.querySelectorAll(".slide");
		slideshowImages[curImgCount].style.opacity = 0;
		curImgCount = (curImgCount + 1) % slideshowImages.length;

		slideshowImages[curImgCount].style.opacity = 1;
	}
}
