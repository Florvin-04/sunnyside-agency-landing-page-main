const hamburgerMenu = document.querySelector("[data-header-menu-btn]");
const headerNav = document.querySelector("[data-header-navigation]");
const body = document.querySelector("body");
hamburgerMenu.addEventListener("click", () => {
  headerNav.classList.toggle("active-nav");
  body.classList.toggle("active-nav");
});
