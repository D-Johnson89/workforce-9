const slideshowImages = document.querySelectorAll(".slide-cont .slide-img");

const nextImgDelay = 2500;
let curImgCount = 0;

//slideshowImages[curImgCount].style.display = "block";
slideshowImages[curImgCount].style.opacity = 1;

setInterval(nextImage, nextImgDelay);

function nextImage() {
	//slideshowImages[curImgCount].style.display = "none";
	slideshowImages[curImgCount].style.opacity = 0;
	curImgCount = (curImgCount + 1) % slideshowImages.length;
	//slideshowImages[curImgCount].style.display = "block";
	slideshowImages[curImgCount].style.opacity = 1;
}
