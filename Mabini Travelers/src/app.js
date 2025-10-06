let slideIndex = 0;
let slideTimer;

function showSlides() {
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Move to next slide
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  // Remove active from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // Show current slide + activate dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");

  // Auto-slide every 4s
  slideTimer = setTimeout(showSlides, 4000);
}

function currentSlide(n) {
  clearTimeout(slideTimer); // pause auto when clicked
  slideIndex = n;
  showSlides();
}

// Add click events to dots
document.addEventListener("DOMContentLoaded", () => {
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => currentSlide(i + 1));
  }
  showSlides(); // start carousel
});
