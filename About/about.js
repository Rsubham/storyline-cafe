// animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// hero container
ScrollReveal().reveal(".about_hero_content p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about_hero_content h1", {
  ...scrollRevealOption,
  delay: 500,
});


// about container
ScrollReveal().reveal(".about_section_media img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about_section_content .section_subheader", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".about_section_content .section_header", {
  ...scrollRevealOption,
  delay: 800,
});

ScrollReveal().reveal(".about_section_content .section_description", {
  ...scrollRevealOption,
  delay: 1200,
});


// why container
ScrollReveal().reveal(".why_text p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".why_text h2", {
  ...scrollRevealOption,
  delay: 300,
});

ScrollReveal().reveal(".why_list_li1", {
  ...scrollRevealOption,
  origin: "right",
  delay: 500,
});

ScrollReveal().reveal(".why_list_li2", {
  ...scrollRevealOption,
  origin: "right",
  delay: 750,
});

ScrollReveal().reveal(".why_list_li3", {
  ...scrollRevealOption,
  origin: "right",
  delay: 1000,
});

ScrollReveal().reveal(".why_list_li4", {
  ...scrollRevealOption,
  origin: "right",
  delay: 1250,
});

ScrollReveal().reveal(".why_list_li5", {
  ...scrollRevealOption,
  origin: "right",
  delay: 1500,
});


// cta container
ScrollReveal().reveal(".about_cta_container h2", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about_cta_container p", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".about_cta_container .btn", {
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

if (window.innerWidth < 768) {
  ScrollReveal().reveal(
    `
    .about_hero_content p,
    .about_hero_content h1,
    .about_section_media img,
    .about_section_content .section_subheader,
    .about_section_content .section_header,
    .about_section_content .section_description,
    .why_text p,
    .why_text h2,
    .why_list_li1,
    .why_list_li2,
    .why_list_li3,
    .why_list_li4,
    .why_list_li5,
    .about_cta_container h2,
    .about_cta_container p,
    .about_cta_container .btn,
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

