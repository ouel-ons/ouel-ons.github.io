// Year
document.getElementById("year").textContent = new Date().getFullYear();

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

// Optional: subtle terminal "typing" feel (no fast spam)
(function terminalTyping() {
  const el = document.getElementById("term");
  if (!el) return;

  const full = el.textContent;
  el.textContent = "";
  let i = 0;

  const step = () => {
    i += Math.floor(Math.random() * 3) + 1;
    el.textContent = full.slice(0, i);
    if (i < full.length) requestAnimationFrame(step);
  };

  // Delay so layout loads first
  setTimeout(step, 250);
})();
