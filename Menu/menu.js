document.addEventListener("DOMContentLoaded", () => {
  const menus = {
    gopalpur: "/Assets/Menu/Outlet/Menu_Gp.pdf",
    berhampur: "/Assets/Menu/Outlet/Menu_Bp.pdf",
  };

  const outlets = document.querySelectorAll(".outlet");

  outlets.forEach((outlet) => {
    const outletName = outlet.querySelector("h2").textContent.trim().toLowerCase();
    const buttons = outlet.querySelectorAll(".btn");

    let pdfPath = "";
    if (outletName.includes("gopalpur")) pdfPath = menus.gopalpur;
    else if (outletName.includes("berhampur")) pdfPath = menus.berhampur;

    buttons[0].addEventListener("click", () => {
      window.open(pdfPath, "_blank");
    });

    buttons[1].addEventListener("click", async () => {
      try {
        const response = await fetch(pdfPath);
        if (!response.ok) throw new Error("Network response was not ok");

        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = pdfPath.split("/").pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(blobUrl);
      } catch (err) {
        console.error("Download failed:", err);
        window.open(pdfPath, "_blank");
      }
    });
  });
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