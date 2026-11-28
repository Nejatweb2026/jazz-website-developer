
document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");
  const themeToggle = document.getElementById("themeToggle");
  const contactForm = document.getElementById("contactForm");
  const formNotice = document.getElementById("formNotice");

  // Mobile Menu
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      });
    });
  }

  // Dark and Light Mode
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      document.body.classList.toggle("light");

      const isLight = document.body.classList.contains("light");

      themeToggle.textContent = isLight
        ? "☾ Dark Mode"
        : "☀ Light Mode";
    });
  }

  // Contact Form
  if (contactForm && formNotice) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      formNotice.textContent =
        "Thank you! This demo form does not send messages yet.";

      contactForm.reset();
    });
  }

});
