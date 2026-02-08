// Year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Reveal cards on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".card").forEach((card) => observer.observe(card));

// Filters (projects.html)
const chips = document.querySelectorAll(".chip");
const projects = document.querySelectorAll(".project");

if (chips.length && projects.length) {
  const setActive = (btn) => {
    chips.forEach((c) => c.classList.remove("active"));
    btn.classList.add("active");
  };

  const applyFilter = (tag) => {
    projects.forEach((p) => {
      const tags = (p.getAttribute("data-tags") || "").split(" ");
      const visible = tag === "all" || tags.includes(tag);
      p.classList.toggle("hidden", !visible);
    });
  };

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const tag = chip.getAttribute("data-filter");
      setActive(chip);
      applyFilter(tag);
    });
  });

  applyFilter("all");
}
