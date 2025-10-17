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



// location container
ScrollReveal().reveal(".location_container .section_subheader", {
  ...scrollRevealOption,
  origin: "bottom",
});

ScrollReveal().reveal(".location_container .section_header", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".location_map1", {
  ...scrollRevealOption,
  origin: "left",
  delay: 800,
});

ScrollReveal().reveal(".location_map2", {
  ...scrollRevealOption,
  origin: "right",
  delay: 800,
});



// mobile delay remove
if (window.innerWidth < 768) {
  ScrollReveal().reveal(".story_image img, .story_content .section_subheader, .story_content .section_header, .story_content .section_description, .story_btn, .dine_container .section_subheader, .dine_container .section_header, .dine_card1, .dine_card2, .dine_card3, .dine_btn .view, .dine_btn .reserve, .room_container .section_subheader, .room_container .section_header, .room_card1, .room_card2, .room_card3, .room_btn, .event_container .section_subheader, .event_container .section_header, .event_card1, .event_card2, .event_card3, .event_card4, .event_card5, .event_btn, .offer_container .section_subheader, .offer_container .section_header, .offer_text .section_description, .offer_card1, .offer_card2, .offer_card3, .gallery_text .section_subheader, .gallery_text .section_header, .gallery_carousel, .memory_btn, .location_container .section_subheader, .location_container .section_header, .location_map1, .location_map2", {
    ...scrollRevealOption,
    delay: 400
  });
}


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




