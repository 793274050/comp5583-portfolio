const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

const savedTheme = localStorage.getItem("ayden-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  root.dataset.theme = "dark";
}

themeButton.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("ayden-theme", nextTheme);
});

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navLinks.classList.toggle("open", !isOpen);
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("open");
  });
});

document.querySelectorAll(".details-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    details.hidden = isOpen;
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
document.querySelector("#year").textContent = new Date().getFullYear();
