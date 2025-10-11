const folderPath = "/Assets/Reservation/Table/";
const imageCount = 12;
const columns = 4;
const rows = 3;
const container = document.querySelector(".table_reserv_assets");

async function imageExists(url) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.ok;
  } catch {
    return false;
  }
}

async function loadImages() {
  container.innerHTML = "";
  const zoneWidth = 100 / columns;
  const zoneHeight = 100 / rows;
  let imgIndex = 0;

  for (let i = 1; i <= imageCount; i++) {
    let src = `${folderPath}${i}.jpg`;
    if (!(await imageExists(src))) {
      src = `${folderPath}${i}.png`;
      if (!(await imageExists(src))) continue;
    }

    const img = document.createElement("img");
    img.src = src;
    img.alt = `Table Asset ${i}`;
    img.classList.add("asset");

    const row = Math.floor(imgIndex / columns);
    const col = imgIndex % columns;

    const top = row * zoneHeight + zoneHeight / 2;
    const left = col * zoneWidth + zoneWidth / 2;

    const rotate = (Math.random() * 40 - 20).toFixed(2);
    img.style.setProperty("--rot", `${rotate}deg`);

    const wrapper = document.createElement("div");
    wrapper.classList.add("img-wrapper");
    wrapper.style.top = `${top}%`;
    wrapper.style.left = `${left}%`;
    wrapper.appendChild(img);

    container.appendChild(wrapper);
    imgIndex++;
  }
}

loadImages();



// feature card
document.querySelectorAll('.feature_card').forEach(card => {
  const angle = (Math.random() * 10 - 5).toFixed(2) + 'deg';
  card.style.setProperty('--angle', angle);
});


// animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// hero container
ScrollReveal().reveal(".reservation_hero_content p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".reservation_hero_content h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".table_reserv_container .section_subheader, .room_reserv_container .section_subheader, .event_reserv_container .section_subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".table_reserv_container .section_header, .room_reserv_container .section_header, .event_reserv_container .section_header", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".table_reserv_assets, .event-showcase", {
  ...scrollRevealOption,
  origin: "left",
  delay: 800,
});

ScrollReveal().reveal(".features_grid", {
  ...scrollRevealOption,
  origin: "right",
  delay: 1200,
});

ScrollReveal().reveal(".table_form, .event_form", {
  ...scrollRevealOption,
  origin: "right",
  delay: 1200,
});

ScrollReveal().reveal(".room_form", {
  ...scrollRevealOption,
  origin: "left",
  delay: 800,
});

if (window.innerWidth < 768) {
  ScrollReveal().reveal(
    `
    .reservation_hero_content p,
    .reservation_hero_content h1,
    .table_reserv_container .section_subheader, 
    .room_reserv_container .section_subheader, 
    .event_reserv_container .section_subheader,
    .table_reserv_container .section_header, 
    .room_reserv_container .section_header, 
    .event_reserv_container .section_header,
    .table_reserv_assets, 
    .event-showcase,
    .features_grid,
    .table_form, 
    .event_form,
    .room_form
    
    `,
    {
      ...scrollRevealOption,
    }
  );
}