const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const allSlides = document.querySelectorAll(".slide");
let currentActiveSlide = 0;

prevBtn.addEventListener("click", () => {
	allSlides[currentActiveSlide].classList.remove("active-slide");
	if (currentActiveSlide <= 0) {
		currentActiveSlide = allSlides.length - 1;
		allSlides[currentActiveSlide].classList.add("active-slide");
	} else {
		currentActiveSlide -= 1;
		allSlides[currentActiveSlide].classList.add("active-slide");
	}
});

nextBtn.addEventListener("click", () => {
	allSlides[currentActiveSlide].classList.remove("active-slide");
	if (currentActiveSlide >= allSlides.length - 1) {
		currentActiveSlide = 0;
		allSlides[currentActiveSlide].classList.add("active-slide");
	} else {
		currentActiveSlide += 1;
		allSlides[currentActiveSlide].classList.add("active-slide");
	}
});
