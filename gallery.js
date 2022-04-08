const slideshowImages = document
	.querySelectorAll(".slider .slide")
	.forEach((slide) => {
		slide.style.opacity = 0;
	});

const sliders = document.querySelectorAll(".slider");
const sliderSlides = [...sliders].map((slider) => {
	return slider.querySelectorAll(".slide");
});

const nextImgDelay = 2500;
const slidesPagination = sliderSlides.reduce((previous, _, currentIndex) => {
	return { ...previous, [currentIndex]: { current: 0, previous: -1 } };
}, {});

setInterval(nextImage, nextImgDelay);

function nextImage() {
	sliderSlides.forEach((slides, index) => {
		const currentShownSlide = slidesPagination[index].current;
		const previousShownSlide = slidesPagination[index].previous;
		slides[currentShownSlide].style.opacity = 1;
		if (previousShownSlide !== -1) {
			slides[previousShownSlide].style.opacity = 0;
		}
		slidesPagination[index].previous = currentShownSlide;
		slidesPagination[index].current =
			(currentShownSlide + 1) % slides.length;
	});
}
