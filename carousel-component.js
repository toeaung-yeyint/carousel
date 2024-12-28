const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const allSlides = document.querySelectorAll(".slide");
const allRadioBtns = document.querySelectorAll(".radio-btn");
let currentActiveSlide = 0;
const carousel = document.querySelector(".carousel");

prevBtn.addEventListener("click", () => {
	allSlides[currentActiveSlide].classList.remove("active-slide");
	allRadioBtns[currentActiveSlide].classList.remove("active-radio-btn");
	if (currentActiveSlide <= 0) {
		currentActiveSlide = allSlides.length - 1;
		allSlides[currentActiveSlide].classList.add("active-slide");
		allRadioBtns[currentActiveSlide].classList.add("active-radio-btn");
	} else {
		currentActiveSlide -= 1;
		allSlides[currentActiveSlide].classList.add("active-slide");
		allRadioBtns[currentActiveSlide].classList.add("active-radio-btn");
	}
});

nextBtn.addEventListener("click", () => {
	allSlides[currentActiveSlide].classList.remove("active-slide");
	allRadioBtns[currentActiveSlide].classList.remove("active-radio-btn");
	if (currentActiveSlide >= allSlides.length - 1) {
		currentActiveSlide = 0;
		allSlides[currentActiveSlide].classList.add("active-slide");
		allRadioBtns[currentActiveSlide].classList.add("active-radio-btn");
	} else {
		currentActiveSlide += 1;
		allSlides[currentActiveSlide].classList.add("active-slide");
		allRadioBtns[currentActiveSlide].classList.add("active-radio-btn");
	}
});

allRadioBtns.forEach((radioBtn, index) => {
	radioBtn.addEventListener("click", (e) => {
		allSlides[currentActiveSlide].classList.remove("active-slide");
		allRadioBtns[currentActiveSlide].classList.remove("active-radio-btn");
		currentActiveSlide = index;
		allSlides[currentActiveSlide].classList.add("active-slide");
		allRadioBtns[currentActiveSlide].classList.add("active-radio-btn");
	});
});

let startX = 0;
let currentX = 0;
let diff = 0;
let isSwiping = false;

carousel.addEventListener("touchstart", (e) => {
	startX = e.touches[0].clientX;
});

carousel.addEventListener("touchmove", (e) => {
	currentX = e.touches[0].clientX;
	diff = startX - currentX;
	if (Math.abs(diff) > 10) {
		isSwiping = true;
	}
});

carousel.addEventListener("touchend", (e) => {
	if (!isSwiping) return;

	isSwiping = false;

	if (diff > 50) {
		allSlides[currentActiveSlide].classList.remove("active-slide");
		allRadioBtns[currentActiveSlide].classList.remove("active-radio-btn");
		if (currentActiveSlide >= allSlides.length - 1) {
			currentActiveSlide = 0;
			allSlides[currentActiveSlide].classList.add("active-slide");
			allRadioBtns[currentActiveSlide].classList.add("active-radio-btn");
		} else {
			currentActiveSlide += 1;
			allSlides[currentActiveSlide].classList.add("active-slide");
			allRadioBtns[currentActiveSlide].classList.add("active-radio-btn");
		}
	}
	if (diff < -50) {
		allSlides[currentActiveSlide].classList.remove("active-slide");
		allRadioBtns[currentActiveSlide].classList.remove("active-radio-btn");
		if (currentActiveSlide <= 0) {
			currentActiveSlide = allSlides.length - 1;
			allSlides[currentActiveSlide].classList.add("active-slide");
			allRadioBtns[currentActiveSlide].classList.add("active-radio-btn");
		} else {
			currentActiveSlide -= 1;
			allSlides[currentActiveSlide].classList.add("active-slide");
			allRadioBtns[currentActiveSlide].classList.add("active-radio-btn");
		}
	}
});
