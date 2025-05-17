const list = document.querySelector(".testimonials__list");
const cards = document.querySelector(".testimonials__card");
const dots = document.querySelectorAll(".testimonials__slider-btn");
let card = document.querySelector(".testimonials__card");

let cardWidth = card.offsetWidth;

window.addEventListener("resize", () => {
  if (card) {
    cardWidth = card.offsetWidth;
  }
});

// console.log("Card width:", cardWidth);

function goToSlide(index) {
  list.style.transform = `translateX(-${index * cardWidth}px)`;

  //  list.style.transform = `translateX(-690px)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    console.log("clickeddddd");
    const index = parseInt(dot.dataset.index, 10);
    console.log("index", index);
    goToSlide(index);
  });
});
goToSlide(0);
