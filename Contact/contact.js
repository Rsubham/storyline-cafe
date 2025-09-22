// animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// hero container
ScrollReveal().reveal(".contact_hero_content p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".contact_hero_content h1", {
  ...scrollRevealOption,
  delay: 500,
});


// contact container
ScrollReveal().reveal(".contact-info h2", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".contact-info p", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".info-item1", {
  ...scrollRevealOption,
  delay: 600,
});

ScrollReveal().reveal(".info-item2", {
  ...scrollRevealOption,
  delay: 800,
});

ScrollReveal().reveal(".info-item3", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".info-item4", {
  ...scrollRevealOption,
  delay: 1200,
});

ScrollReveal().reveal(".why_list_li3", {
  ...scrollRevealOption,
  origin: "right",
  delay: 1000,
});

ScrollReveal().reveal(".why_list_li4", {
  ...scrollRevealOption,
  origin: "right",
  delay: 1200,
});

ScrollReveal().reveal(".social-icons", {
  ...scrollRevealOption,
    distance: "0px",
  delay: 1500,
});

ScrollReveal().reveal(".contact-form", {
  ...scrollRevealOption,
  origin: "right",
  delay: 100,
});

// cta container
ScrollReveal().reveal(".contact_cta_container h2", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".contact_cta_container p", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".contact_cta_container .btn", {
  ...scrollRevealOption,
  delay: 800,
  distance: "0px",
});

// gallery container
ScrollReveal().reveal(".gallery_text .section_subheader", {
  ...scrollRevealOption,
  origin: "bottom",
});

ScrollReveal().reveal(".gallery_text .section_header", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".gallery_carousel", {
  ...scrollRevealOption,
  delay: 800,
});

ScrollReveal().reveal(".memory_btn", {
  ...scrollRevealOption,
  distance: "0px",
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


if (window.innerWidth < 768) {
  ScrollReveal().reveal(
    `
    .contact_hero_content p,
    .contact_hero_content h1,
    .contact-info h2,
    .contact-info p,
    .info-item1,
    .info-item2,
    .info-item3,
    .info-item4,
    .why_list_li3,
    .why_list_li4,
    .social-icons,
    .contact-form,
    .contact_cta_container h2,
    .contact_cta_container p,
    .contact_cta_container .btn,
    .gallery_text .section_subheader,
    .gallery_text .section_header,
    .gallery_carousel,
    .memory_btn,
    .location_container .section_subheader,
    .location_container .section_header,
    .location_map1,
    .location_map2
    `,
    {
      ...scrollRevealOption,
    }
  );
}
