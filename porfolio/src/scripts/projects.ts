const PROJECTS_PER_PAGE = 4;

let currentPage = 1;
let hasAnimated = false;
const projectCards = document.querySelectorAll<HTMLElement>('.project-card');
const totalProjects = projectCards.length;
const totalPages = Math.ceil(totalProjects / PROJECTS_PER_PAGE);

const prevBtn = document.getElementById('prev-btn') as HTMLButtonElement;
const nextBtn = document.getElementById('next-btn') as HTMLButtonElement;
const paginationDots = document.getElementById('pagination-dots');
const projectsGrid = document.getElementById('projects-grid');

function createPaginationDots() {
  if (!paginationDots) return;
  paginationDots.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const dot = document.createElement('button');
    dot.className = 'w-12 h-12 flex items-center justify-center rounded-full text-white font-semibold transition-all';
    dot.textContent = String(i);
    dot.setAttribute('aria-label', `Ir a página ${i}`);
    dot.setAttribute('data-page', String(i));

    if (i === currentPage) {
      dot.classList.add('bg-blue-600', 'scale-110');
    } else {
      dot.classList.add('bg-gray-800', 'hover:bg-gray-700');
    }

    dot.addEventListener('click', () => {
      showPage(i, true);
    });

    paginationDots.appendChild(dot);
  }
}

function updatePaginationDots() {
  if (!paginationDots) return;
  const dots = paginationDots.querySelectorAll('button');
  dots.forEach((dot, index) => {
    const pageNum = index + 1;
    dot.classList.remove('bg-blue-600', 'bg-gray-800', 'scale-110', 'hover:bg-gray-700');

    if (pageNum === currentPage) {
      dot.classList.add('bg-blue-600', 'scale-110');
    } else {
      dot.classList.add('bg-gray-800', 'hover:bg-gray-700');
    }
  });
}

function applyAnimations() {
  let visibleIndex = 0;
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;

  projectCards.forEach((card, index) => {
    if (index >= startIndex && index < endIndex) {
      card.classList.remove('project-animate', 'project-animate-0', 'project-animate-1', 'project-animate-2', 'project-animate-3', 'project-hidden');
      // Forzar reflow para reiniciar animación
      void card.offsetWidth;
      card.classList.add('project-animate', `project-animate-${visibleIndex}`);
      visibleIndex++;
    }
  });
}

function showPage(page: number, shouldScroll = false, animate = true) {
  currentPage = page;

  projectCards.forEach((card, index) => {
    const startIndex = (page - 1) * PROJECTS_PER_PAGE;
    const endIndex = startIndex + PROJECTS_PER_PAGE;

    card.classList.remove('project-animate', 'project-animate-0', 'project-animate-1', 'project-animate-2', 'project-animate-3', 'project-hidden');

    if (index >= startIndex && index < endIndex) {
      card.style.display = 'block';
      if (!hasAnimated) {
        card.classList.add('project-hidden');
      }
    } else {
      card.style.display = 'none';
    }
  });

  if (animate && hasAnimated) {
    applyAnimations();
  }

  if (prevBtn) prevBtn.disabled = currentPage === 1;
  if (nextBtn) nextBtn.disabled = currentPage === totalPages;

  updatePaginationDots();

  if (shouldScroll) {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Intersection Observer para activar animaciones al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasAnimated) {
      hasAnimated = true;
      applyAnimations();
      observer.disconnect();
    }
  });
}, {
  threshold: 0.5
});

// Event listeners
prevBtn?.addEventListener('click', () => {
  if (currentPage > 1) {
    showPage(currentPage - 1, true);
  }
});

nextBtn?.addEventListener('click', () => {
  if (currentPage < totalPages) {
    showPage(currentPage + 1, true);
  }
});

// Inicializar
createPaginationDots();
showPage(1, false, false);

if (projectsGrid) {
  observer.observe(projectsGrid);
}
