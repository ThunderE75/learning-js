// Image Slider

let slides = document.querySelectorAll('.slide');
let slideIndex = 0;
let intervalId = null;

// initSlider()    // Instead of directly calling it
// Call it after all the dom content is loaded
document.addEventListener("DOMContentLoaded", initSlider);
function initSlider() {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 3000);
}
function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

// Buttons are not working 

function prevSlide() {
    clearInterval(intervalId);
    slideIndex -= 1;
    showSlide(slideIndex);
}
function nextSlide() {
    clearInterval(intervalId);
    slideIndex += 1;
    showSlide(slideIndex);
}