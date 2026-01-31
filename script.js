function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function toggleBio() {
  const moreBio = document.getElementById("more-bio");
  const btn = document.querySelector(".read-more-btn");

  if (moreBio.style.display === "block") {
    moreBio.style.display = "none";
    btn.textContent = "Read more";
  } else {
    moreBio.style.display = "block";
    btn.textContent = "Read less";
  }
}
