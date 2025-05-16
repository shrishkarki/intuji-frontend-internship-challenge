const list=document.querySelector(".testimonials__list");
const cards=document.querySelector(".testimonials__card");
const dots=document.querySelectorAll(".testimonials__slider-btn");
const card = document.querySelector(".testimonials__card");
// console.log("cardwidth",cardWidth); 


window.addEventListener("resize",()=>{
if(card){
     const cardWidth = card.offsetWidth;
    console.log("Card width:", cardWidth);
}
})
function goToSlide(index) {
    list.style.transform = `translateX(-${index * 69}rem)`;
    //  list.style.transform = `translateX(-690px)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }
    dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.dataset.index, 10);
      goToSlide(index);
    });
  });
  goToSlide(0)