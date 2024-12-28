const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const allSlides = document.querySelectorAll(".slide");
const allRadioBtns = document.querySelectorAll(".radio-btn");
let currentActiveSlide = 0;

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
