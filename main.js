// Responsive Nav
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  const icon = menuBtn.querySelector("i");
  if (navLinks.classList.contains("show")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

document.addEventListener("click", (e) => {
  if (
    navLinks.classList.contains("show") &&
    !navLinks.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    navLinks.classList.remove("show");
    const icon = menuBtn.querySelector("i");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});
