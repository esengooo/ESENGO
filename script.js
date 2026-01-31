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
<script>
  const toggleWorkBtn = document.getElementById('toggle-work');
  const workSection = document.getElementById('work');

  toggleWorkBtn.addEventListener('click', () => {
    workSection.classList.toggle('hidden');
  });
</script>
function toggleWork() {
  const moreWork = document.getElementById("more-work");
  const btn = document.querySelector("#work-section .read-more-btn");

  moreWork.classList.toggle("hidden");
  if (moreWork.classList.contains("hidden")) {
    moreWork.style.display = "none";
    btn.textContent = "Read more";
  } else {
    moreWork.style.display = "block";
    btn.textContent = "Read less";
  }
}
