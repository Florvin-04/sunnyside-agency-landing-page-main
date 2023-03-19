const hamburgerMenu = document.querySelector("[data-header-menu-btn]");
const headerNav = document.querySelector("[data-header-navigation]");

hamburgerMenu.addEventListener("click", () => {
  headerNav.classList.toggle("active-nav");
});
