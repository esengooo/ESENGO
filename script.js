/* ===============================
   MENU TOGGLE
=============================== */
function toggleMenu() {
  const menu = document.getElementById("menu-panel"); // correct target
  if (!menu) return;

  menu.classList.toggle("hidden"); // toggle visibility
}


/* ===============================
   SMOOTH SCROLL & CLOSE MENU ON LINK CLICK
=============================== */
document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll("#hamburger-nav .menu-links a");

  menuLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      // Scroll to target section smoothly
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }

      // Close the menu after click
      toggleMenu();
    });
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
