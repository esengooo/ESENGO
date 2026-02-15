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
