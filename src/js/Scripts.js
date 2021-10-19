const menuIcon = document.querySelector("hamburger-menu");
const navbar = document.querySelector("navbar");
console.log(menuIcon);
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});
