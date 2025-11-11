// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for buttons with data-scroll-to
  const scrollButtons = document.querySelectorAll("[data-scroll-to]");

  scrollButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-scroll-to");
      const target = document.getElementById(targetId);
      if (!target) return;

      const navHeight = document.querySelector(".navbar")?.offsetHeight || 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 10;

      window.scrollTo({
        top: targetTop,
        behavior: "smooth"
      });
    });
  });

  // Set current year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
