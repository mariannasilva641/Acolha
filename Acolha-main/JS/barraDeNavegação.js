const hamburger = document.querySelector(".navegação");
const nav = document.querySelector(".nav");
const containerCenter = document.querySelector(".container-center");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  containerCenter.classList.toggle("hidden");
});
