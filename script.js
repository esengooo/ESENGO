const menuToggle = document.querySelector('.menu-toggle');
const menuPanel = document.getElementById('menu-panel');

// Toggle menu open/close
menuToggle.addEventListener('click', () => {
  menuPanel.classList.toggle('open');
});

// Smooth scroll & close menu when a link is clicked
menuPanel.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) targetSection.scrollIntoView({ behavior: 'smooth' });

    // Close menu
    menuPanel.classList.remove('open');
  });
});


/* ===============================
   GENERIC READ MORE TOGGLE
   (Reusable for all sections)
=============================== */
function toggleSection(sectionId, button) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  if (section.classList.contains("hidden")) {
    section.classList.remove("hidden");
    button.textContent = "Read less";
  } else {
    section.classList.add("hidden");
    button.textContent = "Read more";
  }
}

/* ===============================
   WORK CATEGORY TOGGLE
=============================== */
function toggleCategory(sectionId, button) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  if (section.classList.contains("hidden")) {
    section.classList.remove("hidden");
    button.textContent = button.textContent.replace("Show", "Hide");
  } else {
    section.classList.add("hidden");
    button.textContent = button.textContent.replace("Hide", "Show");
  }
}

/* ===============================
   BACHELOR PROJECT TOGGLE
=============================== */
function toggleBachelor() {
  const more = document.getElementById("more-bachelor");
  const btn = document.querySelector("#bachelor-project .read-more-btn");

  if (!more || !btn) return;

  if (more.classList.contains("hidden")) {
    more.classList.remove("hidden");
    btn.textContent = "Read less";
  } else {
    more.classList.add("hidden");
    btn.textContent = "Read more";
  }
}
// WORK ARCHIVE SLIDER
document.querySelectorAll(".work-swiper").forEach(slider => {
  const section = slider.closest(".work-archive");
  
if (!section || typeof Swiper === "undefined") {
  console.error("Swiper or the Work archive section was not found.", {
    sectionFound: !!section,
    swiperLoaded: typeof Swiper !== "undefined"
  });
  return;
}

  new Swiper(slider, {
    slidesPerView: 1.15,
    spaceBetween: 16,
    grabCursor: true,
    navigation: {
      nextEl: section.querySelector(".archive-next"),
      prevEl: section.querySelector(".archive-prev")
    },
    pagination: {
      el: section.querySelector(".archive-pagination"),
      clickable: true
    },
    breakpoints: {
      600: { slidesPerView: 2, spaceBetween: 20 },
      900: { slidesPerView: 3, spaceBetween: 24 },
      1200: { slidesPerView: 3.5, spaceBetween: 24 }
    }
  });
});
