const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector("nav");
const url = document.querySelectorAll(".link");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", toggleNavbar);

// Loop through each link and add the event listener
url.forEach(link => {
  link.addEventListener("click", toggleNavbar);
});