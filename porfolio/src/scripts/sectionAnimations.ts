interface AnimationConfig {
  sectionId: string;
  elements: { selector: string; delay: number }[];
}

const sections: AnimationConfig[] = [
  {
    sectionId: 'skills',
    elements: [
      { selector: '.skills-header', delay: 1 },
      { selector: '.skills-carousel', delay: 2 },
    ],
  },
  {
    sectionId: 'contact',
    elements: [
      { selector: '.contact-header', delay: 1 },
      { selector: '.contact-form', delay: 2 },
      { selector: '.contact-card:nth-child(1)', delay: 3 },
      { selector: '.contact-card:nth-child(2)', delay: 4 },
      { selector: '.contact-card:nth-child(3)', delay: 5 },
    ],
  },
];

function animateSection(config: AnimationConfig) {
  config.elements.forEach(({ selector, delay }) => {
    const element = document.querySelector(selector);
    if (element) {
      element.classList.remove('section-hidden');
      element.classList.add('section-animate', `section-animate-${delay}`);
    }
  });
}

const observedSections = new Set<string>();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        if (!observedSections.has(sectionId)) {
          observedSections.add(sectionId);
          const config = sections.find((s) => s.sectionId === sectionId);
          if (config) {
            animateSection(config);
          }
        }
      }
    });
  },
  { threshold: 0.2 }
);

// Observar las secciones
sections.forEach(({ sectionId }) => {
  const section = document.getElementById(sectionId);
  if (section) {
    observer.observe(section);
  }
});
