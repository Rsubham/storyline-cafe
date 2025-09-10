// animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header_container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header_container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header_btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// story container
ScrollReveal().reveal(".story_image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".story_content .section_subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".story_content .section_header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".story_content .section_description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".story_btn", {
  ...scrollRevealOption,
  distance: "0px",
  delay: 2000,
});

// dine container
ScrollReveal().reveal(".dine_container .section_subheader", {
  ...scrollRevealOption,
  origin: "bottom",
});

ScrollReveal().reveal(".dine_container .section_header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".dine_card1", {
  ...scrollRevealOption,
  delay: 800,
});

ScrollReveal().reveal(".dine_card2", {
  ...scrollRevealOption,
  delay: 1100,
});

ScrollReveal().reveal(".dine_card3", {
  ...scrollRevealOption,
  delay: 1400,
});

ScrollReveal().reveal(".dine_btn .view", {
  ...scrollRevealOption,
  origin: "left",
  distance: "0px",
  delay: 1700,
});

ScrollReveal().reveal(".dine_btn .reserve", {
  ...scrollRevealOption,
  origin: "right",
  distance: "0px",
  delay: 1700,
});

// room container
ScrollReveal().reveal(".room_container .section_subheader", {
  ...scrollRevealOption,
  origin: "bottom",
});

ScrollReveal().reveal(".room_container .section_header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".room_card1", {
  ...scrollRevealOption,
  delay: 800,
});

ScrollReveal().reveal(".room_card2", {
  ...scrollRevealOption,
  delay: 1100,
});

ScrollReveal().reveal(".room_card3", {
  ...scrollRevealOption,
  delay: 1400,
});

ScrollReveal().reveal(".room_btn", {
  ...scrollRevealOption,
  distance: "0px",
  delay: 1700,
});

// event container
ScrollReveal().reveal(".event_container .section_subheader", {
  ...scrollRevealOption,
  origin: "bottom",
});

ScrollReveal().reveal(".event_container .section_header", {
  ...scrollRevealOption,
  delay: 300,
});

ScrollReveal().reveal(".event_card1", {
  ...scrollRevealOption,
  origin: "left",
  delay: 550,
});

ScrollReveal().reveal(".event_card2", {
  ...scrollRevealOption,
  origin: "top",
  delay: 900,
});

ScrollReveal().reveal(".event_card3", {
  ...scrollRevealOption,
  origin: "top",
  delay: 1150,
});

ScrollReveal().reveal(".event_card4", {
  ...scrollRevealOption,
  origin: "right",
  delay: 1650,
});

ScrollReveal().reveal(".event_card5", {
  ...scrollRevealOption,
  delay: 1400,
});

ScrollReveal().reveal(".event_btn", {
  ...scrollRevealOption,
  distance: "0px",
  delay: 1900,
});

// offer container
ScrollReveal().reveal(".offer_container .section_subheader", {
  ...scrollRevealOption,
  origin: "bottom",
});

ScrollReveal().reveal(".offer_container .section_header", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".offer_text .section_description", {
  ...scrollRevealOption,
  delay: 800,
});

ScrollReveal().reveal(".offer_card1", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".offer_card2", {
  ...scrollRevealOption,
  delay: 800,
});

ScrollReveal().reveal(".offer_card3", {
  ...scrollRevealOption,
  delay: 1200,
});

// Dine card
document.querySelectorAll(".dine_card").forEach((card) => {
  const slides = card.querySelectorAll(".slides img");
  const dots = card.querySelectorAll(".dot");
  let index = 0;

  function showSlide(i) {
    slides.forEach((img, idx) => {
      img.classList.toggle("active", idx === i);
      dots[idx].classList.toggle("active", idx === i);
    });
  }

  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 2000);

  showSlide(index);
});

// Room section
document.querySelectorAll(".room_card").forEach((card) => {
  const slides = card.querySelector(".room_slides");
  const prev = card.querySelector(".room_prev");
  const next = card.querySelector(".room_next");
  const total = slides.children.length;
  let index = 0;
  let interval;

  function showSlide(i) {
    index = (i + total) % total; // loop
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  function startAuto() {
    interval = setInterval(() => {
      showSlide(index + 1);
    }, 5000);
  }

  function stopAuto() {
    clearInterval(interval);
  }

  prev.addEventListener("click", () => {
    stopAuto();
    showSlide(index - 1);
    startAuto();
  });

  next.addEventListener("click", () => {
    stopAuto();
    showSlide(index + 1);
    startAuto();
  });

  // Start autoplay
  startAuto();
});


//gallery container
