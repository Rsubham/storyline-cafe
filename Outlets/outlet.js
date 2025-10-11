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


// cta
ScrollReveal().reveal(".cta_container h2", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".cta_container p", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".cta_container .btn", {
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

// gallery container
ScrollReveal().reveal(".highlight1", {
  ...scrollRevealOption,
  origin: "bottom",
});

ScrollReveal().reveal(".highlight2", {
  ...scrollRevealOption,
  delay: 300,
});

ScrollReveal().reveal(".highlight3", {
  ...scrollRevealOption,
  delay: 600,
});

ScrollReveal().reveal(".highlight4", {
  ...scrollRevealOption,
  delay: 900,
});

ScrollReveal().reveal(".highlight5", {
  ...scrollRevealOption,
  delay: 1200,
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