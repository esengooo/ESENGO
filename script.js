<script>
  // Hamburger menu toggle
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  // Bio Read More / Read Less
  function toggleBio() {
    const moreBio = document.getElementById("more-bio");
    const btn = document.querySelector("#profile .read-more-btn");
    moreBio.classList.toggle("hidden");
    btn.textContent = moreBio.classList.contains("hidden") ? "Read more" : "Read less";
  }

  // Work Read More / Read Less
  function toggleWork() {
    const moreWork = document.getElementById("more-work");
    const btn = document.querySelector("#work-section .read-more-btn");
    moreWork.classList.toggle("hidden");
    btn.textContent = moreWork.classList.contains("hidden") ? "Read more" : "Read less";
  }
</script>
