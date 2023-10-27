let lastKnownScrollPosition = 0;
const navbar = document.getElementById("navbar");
const navbarBtn = document.getElementById("navbarBtn");

document.addEventListener("scroll", () => {
  lastKnownScrollPosition = window.scrollY;
  if (lastKnownScrollPosition >= 360) {
    navbar.classList.add("header-color");
    navbarBtn.classList.add("navbar-button-change");
  } else {
    navbar.classList.remove("header-color");
    navbarBtn.classList.remove("navbar-button-change");
  }
});