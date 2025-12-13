export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',

    // Hero
    'hero.greeting': 'Hola, soy Jesus Diaz',
    'hero.role': 'Desarrollador de Software',
    'hero.description': 'Tengo más de dos años de experiencia desarrollando aplicaciones y herramientas web utilizando tecnologías modernas, enfocándome en rendimiento, escalabilidad y buenas prácticas de desarrollo.',
    'hero.downloadCV': 'Descargar Curriculum',
    'hero.contact': 'Contáctame',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': "Hi, I'm Jesus Diaz",
    'hero.role': 'Software Developer',
    'hero.description': 'With +2 years of experience developing web applications and tools using modern technologies. I have a strong focus on performance, scalability, and best practices.',
    'hero.downloadCV': 'Download CV',
    'hero.contact': 'Hire me',
  },
} as const;
