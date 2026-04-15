const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("main-nav");
const overlay = document.getElementById("nav-overlay");

function toggleMenu(open) {
  hamburger.classList.toggle("active", open);
  nav.classList.toggle("open", open);
  overlay.classList.toggle("active", open);
  hamburger.setAttribute("aria-expanded", open);
  document.body.style.overflow = open ? "hidden" : "";
}

hamburger.addEventListener("click", () => {
  const isOpen = nav.classList.contains("open");
  toggleMenu(!isOpen);
});

overlay.addEventListener("click", () => toggleMenu(false));

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => toggleMenu(false));
});
