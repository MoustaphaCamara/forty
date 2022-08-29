let burger = document.querySelector(".burger");
let nav = document.querySelector(".burger_container");

burger.addEventListener("click", () => {
  nav.style.display = "flex";
});
nav.addEventListener("click", () => {
  nav.style.display = "none";
});
