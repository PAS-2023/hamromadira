let body = document.querySelector("body");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let closeIcon = document.querySelector(".close-icon");
let navLinks = document.querySelector(".nav-menu");

hamburgerMenu.addEventListener("click", function () {
  navLinks.classList.toggle("open");
  closeIcon.style.display("block");
  body.classList.add("no-scroll");
});

closeIcon.addEventListener("click", function () {
  navLinks.classList.toggle("open");
  closeIcon.style.display = "none";
  body.classList.remove("no-scroll");
});
