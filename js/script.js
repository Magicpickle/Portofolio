function scrollWin() {
  window.scrollBy(0, 3000);
}

const burgermenu = document.querySelector(".burgermenu");
const navMenu = document.querySelector(".nav-menu");
const logo = document.querySelector(".picture")

burgermenu.addEventListener("click", () => {
  burgermenu.classList.toggle("active");
  navMenu.classList.toggle("active");
  logo.classList.toggle("active");
});

document
  .querySelectorAll("a")
  .forEach((n) => n.addEventListener("click", () => {
    burgermenu.classList.remove("active");
    navMenu.classList.remove("active");
    logo.classList.remove("active");
  }));
