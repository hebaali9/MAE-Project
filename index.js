const section5IconLeft = document.getElementById("sec-5-slide-left");
const section5IconRight = document.getElementById("sec-5-slide-right");
const slides = Array.from(document.querySelectorAll(".sec-5 .slider .slide"));

// Number of pixels to move each time
const jump = 600;
// Numnber of items in the slider list (usually determined by length of dataq coming from backend)
const sliderItemsCount = 6;
// used to disable buttons when reaching the end of the slides
const maxPageCount = sliderItemsCount / 2;
let currentPage = 0;
let distance = 0;

section5IconLeft.addEventListener("click", () => {
  currentPage -= 1;
  distance += jump;
  section5IconRight.disabled = false;

  slides.forEach((slide) => {
    slide.style.transform = `translateX(${distance}px)`;
  });
  if (currentPage === 0) {
    section5IconLeft.disabled = true;
  }
});

section5IconRight.addEventListener("click", () => {
  currentPage += 1;
  distance -= jump;
  section5IconLeft.disabled = false;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${distance}px)`;
  });
  if (currentPage === maxPageCount - 1) {
    section5IconRight.disabled = true;
  }
});
