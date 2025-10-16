const sections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Quando a seção entra na tela → fade-in
        entry.target.classList.add("visible");
      } else {
        // Quando sai da tela → fade-out
        if (window.scrollY < entry.boundingClientRect.top + window.scrollY) {
          entry.target.classList.remove("visible");
        }
      }
    });
  },
  {
    threshold: 0.2, // ajusta a sensibilidade da aparição/desaparição
  }
);

sections.forEach((section) => observer.observe(section));
