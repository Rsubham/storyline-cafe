// animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// hero container
ScrollReveal().reveal(".outlet_hero_content p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".outlet_hero_content h1", {
  ...scrollRevealOption,
  delay: 500,
});

// outlet container
ScrollReveal().reveal(".outlet_image", {
  ...scrollRevealOption,
  origin: "left",
  delay: 500,
});

ScrollReveal().reveal(".outlet_content", {
  ...scrollRevealOption,
  origin: "right",
  delay: 750,
});


if (window.innerWidth < 768) {
  ScrollReveal().reveal(
    `
    .outlet_hero_content p,
    .outlet_hero_content h1,
    .outlet_image,
    .outlet_content,
    .cta_container h2,
    .cta_container p,
    .cta_container .btn,
    .gallery_text .section_subheader,
    .gallery_text .section_header,
    .gallery_carousel,
    .memory_btn,
    .highlight1,
    .highlight2,
    .highlight3,
    .highlight4,
    .highlight5
    `,
    {
      ...scrollRevealOption,
    }
  );
}