const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slides = Array.from(document.querySelectorAll(".slide"));
const radioBtns = Array.from(document.querySelectorAll(".radio-btn"));
const carousel = document.querySelector(".carousel");
let startX = 0;
let currentX = 0;
let diff = 0;
let isSwiping = false;

const handlePrevNextBtn = (e) => {
	let activeSlideIndex = slides.indexOf(
		document.querySelector(".active-slide")
	);
	slides[activeSlideIndex].classList.remove("active-slide");
	radioBtns[activeSlideIndex].classList.remove("active-radio-btn");
	if (e.target.dataset.button === "next") {
		activeSlideIndex >= slides.length - 1
			? (activeSlideIndex = 0)
			: (activeSlideIndex += 1);
	}
	if (e.target.dataset.button === "prev") {
		activeSlideIndex <= 0
			? (activeSlideIndex = slides.length - 1)
			: (activeSlideIndex -= 1);
	}
	slides[activeSlideIndex].classList.add("active-slide");
	radioBtns[activeSlideIndex].classList.add("active-radio-btn");
};

const handleRadioBtn = (index) => {
	let activeSlideIndex = slides.indexOf(
		document.querySelector(".active-slide")
	);
	slides[activeSlideIndex].classList.remove("active-slide");
	radioBtns[activeSlideIndex].classList.remove("active-radio-btn");
	activeSlideIndex = index;
	slides[activeSlideIndex].classList.add("active-slide");
	radioBtns[activeSlideIndex].classList.add("active-radio-btn");
};

prevBtn.addEventListener("click", (e) => handlePrevNextBtn(e));
nextBtn.addEventListener("click", (e) => handlePrevNextBtn(e));
radioBtns.forEach((radioBtn, index) => {
	radioBtn.addEventListener("click", () => handleRadioBtn(index));
});

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

carousel.addEventListener("touchend", () => {
	if (!isSwiping) return;
	isSwiping = false;
	if (diff > 50) {
		handlePrevNextBtn({ target: { dataset: { button: "next" } } });
	}
	if (diff < -50) {
		handlePrevNextBtn({ target: { dataset: { button: "prev" } } });
	}
});
