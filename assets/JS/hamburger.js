const ham = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const backdrop = document.querySelector(".backdrop");
const body = document.body;

ham.addEventListener("click", () => {
  ham.classList.toggle("active");
  mobileMenu.classList.toggle("open");
  backdrop.classList.toggle("show");
  body.classList.toggle("menu-open");
});

backdrop.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  backdrop.classList.remove("show");
  body.classList.remove("menu-open");
  ham.classList.remove("active");
});
