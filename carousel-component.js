const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slides = Array.from(document.querySelectorAll(".slide"));
const radioBtns = Array.from(document.querySelectorAll(".radio-btn"));
const carousel = document.querySelector(".carousel");

// Variables to handle swipe functionality
let startTouchPositionX = 0;
let currentTouchPositionX = 0;
let swipeDistance = 0;
let isSwiping = false;

/**
 * Removes the active state from the active slide and its corresponding radio button,
 * and returns the index of the currently active slide.
 * @returns {number} The index of the currently active slide.
 */
const removeActiveSlideAndRadioBtn = () => {
	let activeSlideIndex = slides.indexOf(
		document.querySelector(".active-slide")
	);
	slides[activeSlideIndex].classList.remove("active-slide");
	radioBtns[activeSlideIndex].classList.remove("active-radio-btn");
	return activeSlideIndex;
};

/**
 * Add the active state to the slide and its corresponding radio button.
 * @param {number} activeSlideIndex - The index of the slide and radio button to activate.
 */
const addActiveSlideAndRadioBtn = (activeSlideIndex) => {
	slides[activeSlideIndex].classList.add("active-slide");
	radioBtns[activeSlideIndex].classList.add("active-radio-btn");
};

/**
 * Handles the functionality of the previous and next buttons in a carousel component.
 * It updates the active slide and the corresponding radio button based on the button clicked.
 * @param {Event} e - The event object from the button click.
 */
const handlePrevNextBtn = (e) => {
	let activeSlideIndex = removeActiveSlideAndRadioBtn();
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
	addActiveSlideAndRadioBtn(activeSlideIndex);
};

/**
 * Handles the radio button click event to change the active slide.
 * @param {number} index - The index of the radio button that was clicked.
 */
const handleRadioBtn = (index) => {
	removeActiveSlideAndRadioBtn();
	addActiveSlideAndRadioBtn(index);
};

prevBtn.addEventListener("click", (e) => handlePrevNextBtn(e));

nextBtn.addEventListener("click", (e) => handlePrevNextBtn(e));

radioBtns.forEach((radioBtn, index) => {
	radioBtn.addEventListener("click", () => handleRadioBtn(index));
});

carousel.addEventListener("touchstart", (e) => {
	startTouchPositionX = e.touches[0].clientX;
});

carousel.addEventListener("touchmove", (e) => {
	currentTouchPositionX = e.touches[0].clientX;
	swipeDistance = startTouchPositionX - currentTouchPositionX;
	if (Math.abs(swipeDistance) > 10) {
		isSwiping = true;
	}
});

carousel.addEventListener("touchend", () => {
	if (!isSwiping) return;
	isSwiping = false;
	if (swipeDistance > 50) {
		handlePrevNextBtn({ target: { dataset: { button: "next" } } });
	}
	if (swipeDistance < -50) {
		handlePrevNextBtn({ target: { dataset: { button: "prev" } } });
	}
});
