document.addEventListener("DOMContentLoaded", () => {
  const pdfFiles = [
    "/Assets/Menu/Outlet/Menu_Gp.pdf", // Gopalpur On Sea
    "/Assets/Menu/Outlet/Menu_Bp.pdf"  // Berhampur
  ];

  const outlets = document.querySelectorAll(".outlet");
  const modal = document.getElementById("pdfModal");
  const viewer = document.getElementById("pdfViewer");
  const closeBtn = document.getElementById("closePdf");

  outlets.forEach((outlet, index) => {
    const viewBtn = outlet.querySelectorAll(".btn")[0];
    const downloadBtn = outlet.querySelectorAll(".btn")[1];
    const pdfSrc = pdfFiles[index];

    viewBtn.addEventListener("click", () => {
      viewer.src = pdfSrc;
      modal.style.display = "flex";
    });

    downloadBtn.addEventListener("click", () => {
      const link = document.createElement("a");
      link.href = pdfSrc;
      link.download = pdfSrc.split("/").pop();
      link.click();
    });
  });

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (!e.target.closest(".pdf_content")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  function closeModal() {
    modal.style.display = "none";
    viewer.src = "";
  }
});

// animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".menu_hero_content p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".menu_hero_content h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".menu_container .section_subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".menu_container .section_header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".outlet1", {
  ...scrollRevealOption,
  delay: 1000,
  origin: "left",
});

ScrollReveal().reveal(".outlet2", {
  ...scrollRevealOption,
  delay: 1000,
  origin: "right",
});

if (window.innerWidth < 768) {
  ScrollReveal().reveal(
    `
    .menu_hero_content p,
    .menu_hero_content h1,
    .menu_container .section_subheader,
    .menu_container .section_header,
    .outlet1,
    .outlet2
    `,
    {
      ...scrollRevealOption,
    }
  );
}