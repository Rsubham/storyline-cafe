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


document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".carousel_container");
  const items = Array.from(container.querySelectorAll(".carousel_item"));
  const prevBtn = container.querySelector(".carousel_controls_prev");
  const nextBtn = container.querySelector(".carousel_controls_next");

  if (!items.length) return;

  const posClasses = [
    "carousel_item-1",
    "carousel_item-2",
    "carousel_item-3",
    "carousel_item-4",
    "carousel_item-5"
  ];

  let currentIndex = items.findIndex(it => it.classList.contains("carousel_item-3"));
  if (currentIndex === -1) currentIndex = Math.floor(items.length / 2);

  items.forEach(img => {
    img.draggable = false;
    img.style.userSelect = "none";
    img.style.webkitUserDrag = "none";
  });

  function applyPositions() {
    items.forEach((el, i) => {
      el.classList.remove(...posClasses, "offscreen");
      const offset = (i - currentIndex + items.length) % items.length;
      if (offset === items.length - 2) el.classList.add("carousel_item-1");
      else if (offset === items.length - 1) el.classList.add("carousel_item-2");
      else if (offset === 0) el.classList.add("carousel_item-3");
      else if (offset === 1) el.classList.add("carousel_item-4");
      else if (offset === 2) el.classList.add("carousel_item-5");
      else el.classList.add("offscreen");
    });
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % items.length;
    applyPositions();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    applyPositions();
  }

  if (nextBtn) nextBtn.addEventListener("click", showNext);
  if (prevBtn) prevBtn.addEventListener("click", showPrev);

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });

  let startX = 0;
  let isDown = false;
  const THRESHOLD = 50;

  container.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.clientX;
    container.classList.add("dragging");
    e.preventDefault();
  });

  window.addEventListener("mouseup", (e) => {
    if (!isDown) return;
    isDown = false;
    container.classList.remove("dragging");
    const dx = e.clientX - startX;
    if (dx < -THRESHOLD) showNext();
    else if (dx > THRESHOLD) showPrev();
  });

  container.addEventListener("mouseleave", () => {
    if (!isDown) return;
    isDown = false;
    container.classList.remove("dragging");
  });

  container.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  container.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const dx = endX - startX;
    if (dx < -THRESHOLD) showNext();
    else if (dx > THRESHOLD) showPrev();
  });

  applyPositions();
});
