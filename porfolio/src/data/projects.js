// Imports de imágenes
import totalTimeImg from '../assets/imagenes_proyectos/total_time.png';
import victoriasCakeImg from '../assets/imagenes_proyectos/victorias_cake.png';
import btmStudioImg from '../assets/imagenes_proyectos/btm_studio.png';
import michelleViloriaImg from '../assets/imagenes_proyectos/michelle_viloria.png';
import mySystemImg from '../assets/imagenes_proyectos/m&y.jpg';
import fbtoolImg from '../assets/imagenes_proyectos/fbtool.png';
import simpleLeadImg from '../assets/imagenes_proyectos/simple_lead.png';
import visitEscagueyImg from '../assets/imagenes_proyectos/visitescaguey.png';
import olasAcuarelaImg from '../assets/imagenes_proyectos/olas_de_acuarela.png';

export const projectsData = {
  es: [
    {
      id: 1,
      title: "Total Time",
      shortDescription: "Aplicación web para la gestión integral de proyectos y equipos de trabajo.",
      description: `
        Total Time es una aplicación web desarrollada con Next.js, React, Tailwind CSS y Supabase,
        diseñada para centralizar y optimizar la gestión de proyectos. Permite organizar el trabajo
        mediante tickets, chats, salas de trabajo, actividades (reuniones), recursos (documentos),
        notas y listas to-do, todo integrado en una pizarra interactiva con soporte drag & drop
        para una experiencia visual e intuitiva.
        <br><br>
        Además, cuenta con un panel de administración que permite a los administradores monitorear
        el progreso de las tareas, incluyendo la opción de captura de pantalla de los trabajadores
        para un mayor control y seguimiento del flujo de trabajo. Este proyecto lo estoy desarrollando
        trabajando bajo BTM Studio, en colaboración con Elias Montilla, propietario de la agencia.
      `,
      image: totalTimeImg,
      tags: ["Next.js", "React", "Tailwind", "Supabase"],
      repo: "#",
      live: "https://www.total-time.app/demo"
    },
    {
      id: 2,
      title: "Victoria's Cake",
      shortDescription: "Plataforma web para la venta y gestión de productos de la academia Victoria's Cake.",
      description: `
        Victoria's Cake es una aplicación web desarrollada con Next.js, React, Tailwind CSS,
        Supabase y Bunny.net, diseñada para digitalizar las operaciones de la academia. Incluye
        un landing informativo donde los usuarios pueden conocer la marca, explorar los cursos
        y recetas disponibles y acceder al contenido de forma clara y atractiva.
        <br><br>
        Los usuarios pueden registrarse, seleccionar y comprar cursos o recetas, que incluyen
        videos y material en PDF almacenados de forma segura. Una vez realizada la compra, el
        contenido adquirido se asigna desde el panel administrativo.
        <br><br>
        La plataforma cuenta con una vista de administración completa, desde la cual se pueden
        gestionar usuarios, cursos y recetas, facilitando el control del contenido, las ventas
        y el acceso de los estudiantes, todo desde un solo lugar. Este proyecto fue desarrollado
        en colaboración junto mi amigo Alex Contreras.
      `,
      image: victoriasCakeImg,
      tags: ["Next.js", "React", "Supabase", "Bunny.net"],
      repo: "#",
      live: "https://www.victoriascake.com/"
    },
    {
      id: 3,
      title: "BTM Studio",
      shortDescription: "Página de presentación de BTM Studio que ayuda a transformar ideas de proyectos en un plan de acción claro y estructurado.",
      description: `
        La página de BTM Studio está desarrollada con Next.js, React, Tailwind CSS, soporte
        multilenguaje (i18n) y Supabase. Además integra la API de OpenAI para potenciar la
        experiencia del usuario.
        <br><br>
        Permite a los usuarios describir la idea de su proyecto y convertirla automáticamente
        en una lista de tareas organizada, ayudando a definir los pasos necesarios para llevarla
        a cabo y ampliar la idea inicial.
        <br><br>
        Este proyecto se está desarrollando en colaboración junto a mi amigo Elias Montilla,
        propietario de BTM Studio, combinando diseño y desarrollo para ofrecer una herramienta
        clara, práctica y orientada a facilitar la planificación de proyectos desde su etapa
        conceptual.
      `,
      image: btmStudioImg,
      tags: ["Next.js", "OpenAI", "i18n", "Supabase"],
      repo: "#",
      live: "https://www.btm-studio.com/en"
    },
    {
      id: 4,
      title: "Página Michelle Viloria",
      shortDescription: "Landing page profesional para Michelle Viloria, estratega de marcas.",
      description: `
        Página web desarrollada con Astro para Michelle Viloria, experta en marketing, branding
        y community management, diseñada para presentar de forma clara y atractiva su propuesta
        de valor.
        <br><br>
        El sitio integra Decap CMS como headless CMS, permitiendo una gestión sencilla y autónoma
        del contenido. La plataforma reúne su portafolio de trabajos, testimonios de clientes y
        un funnel de ventas orientado a la promoción de su ebook.
        <br><br>
        Este proyecto fue desarrollado en colaboración con mi amigo Leonardo Arellano, quien gestionó
        el contacto inicial con la clienta y colaboró en la organización de tareas y optimización
        de detalles durante el proceso de desarrollo.
      `,
      image: michelleViloriaImg,
      tags: ["Astro", "Decap CMS", "Marketing"],
      repo: "#",
      live: "https://www.michelleviloria.com/"
    },
    {
      id: 5,
      title: "Sistema M&Y",
      shortDescription: "Sistema de gestión de inventario y ventas desarrollado para la Papelería M&Y.",
      description: `
        Sistema de escritorio desarrollado con Windows Forms, diseñado para cubrir las necesidades
        operativas de la papelería. La aplicación cuenta con un dashboard que muestra las ventas
        tanto en bolívares como en dólares, facilitando el control financiero diario.
        <br><br>
        La tasa de cambio del bolívar se obtiene mediante web scraping desde la página del Banco
        Central de Venezuela, con la posibilidad de ajustarla manualmente desde la sección de
        configuraciones.
        <br><br>
        El sistema permite gestionar el inventario, registrar ventas en tiempo real y realizar
        el descuento automático de stock por cada transacción, asegurando un control preciso de
        los productos disponibles.
      `,
      image: mySystemImg,
      tags: ["C#", "Windows Forms", "Web Scraping"],
      repo: "https://github.com/gitsusdav/Sistema-Tienda-M-Y",
      live: "#"
    },
    {
      id: 6,
      title: "FollowBackTool",
      shortDescription: "Herramienta web que analiza tus seguidores de Instagram y muestra quiénes no te siguen de vuelta.",
      description: `
        FollowBackTool es una aplicación web desarrollada con ASP.NET, jQuery y Bootstrap, diseñada
        para analizar los datos de seguidores y seguidos de Instagram de forma simple y rápida.
        <br><br>
        El usuario puede subir los archivos JSON exportados desde Instagram, y la plataforma procesa
        la información para identificar automáticamente las cuentas que no siguen de vuelta.
        <br><br>
        El sistema ofrece una solución práctica para gestionar y analizar relaciones en redes sociales,
        sin necesidad de acceso directo a la cuenta del usuario ni integraciones externas.
      `,
      image: fbtoolImg,
      tags: ["ASP.NET", "jQuery", "Bootstrap"],
      repo: "https://github.com/gitsusdav/followBackTool",
      live: "#"
    },
    {
      id: 7,
      title: "Simple Lead Manager",
      shortDescription: "Sistema simple para capturar y gestionar leads desde un formulario web con almacenamiento en Google Sheets y notificaciones por WhatsApp.",
      description: `
        Simple Lead Manager es una herramienta web que permite recibir solicitudes de proyectos
        desde un formulario moderno y guardar automáticamente los datos en Google Sheets. Cada
        nuevo lead puede generar una notificación instantánea por WhatsApp, asegurando que no se
        pierda ningún contacto.
        <br><br>
        Este mismo sistema se usa en el formulario de contacto de este sitio. La solución no requiere
        backend propio, es fácil de configurar, gratuita y está pensada para freelancers, agencias
        y emprendedores que buscan una forma rápida y efectiva de gestionar leads desde un solo lugar.
      `,
      image: simpleLeadImg,
      tags: ["Google Sheets", "WhatsApp API", "Forms"],
      repo: "https://github.com/gitsusdav/simple-lead-manager",
      live: "#"
    },
    {
      id: 8,
      title: "Visit Escagüey",
      shortDescription: "Sitio web informativo para promover el turismo del pueblo Escagüey, en el estado Mérida.",
      description: `
        Es un sitio web desarrollado únicamente con Tailwind CSS, creado para promover los atractivos
        turísticos del pueblo de Escagüey y sus alrededores. El sitio presenta de forma clara los
        lugares turísticos, así como una sección de alojamientos, facilitando la difusión del potencial
        turístico de la zona.
        <br><br>
        Este proyecto fue desarrollado para el grupo de investigación liderado por mi amigo Brandon
        Rangel, perteneciente al Hotel Escuela de los Andes Venezolanos, y fue usado como material
        de apoyo para la promoción turística del pueblo.
      `,
      image: visitEscagueyImg,
      tags: ["Tailwind CSS", "Turismo"],
      repo: "https://github.com/gitsusdav/escaguey",
      live: "https://visitaescaguey.netlify.app/"
    },
    {
      id: 9,
      title: "Olas de Acuarela",
      shortDescription: "Sitio web informativo para la posada Olas de Acuarela, ubicada en la Isla de Margarita, Venezuela.",
      description: `
        Olas de Acuarela es una landing page desarrollada con Tailwind CSS, creada para presentar
        de forma clara y atractiva la información de la posada. El sitio incluye secciones de
        información general del lugar, habitaciones, experiencias, testimonios, equipo de trabajo
        y una sección de reservaciones, facilitando a los visitantes conocer la oferta y realizar
        consultas de manera sencilla.
        <br><br>
        Este proyecto fue desarrollado para el equipo de Luis Sánchez, perteneciente al Hotel Escuela
        de los Andes Venezolanos, como parte de una iniciativa de apoyo a la promoción turística.
      `,
      image: olasAcuarelaImg,
      tags: ["Tailwind CSS", "Turismo"],
      repo: "https://github.com/gitsusdav/olas-de-acuarela",
      live: "https://olasdeacuarela.netlify.app/"
    }
  ],
  en: [
    {
      id: 1,
      title: "Total Time",
      shortDescription: "Web application for project and team management.",
      description: `
        Total Time is a web application developed with Next.js, React, Tailwind CSS, and Supabase,
        designed to centralize and optimize project management. It allows organizing work through
        tickets, chats, workrooms, activities (meetings), resources (documents), notes, and to-do
        lists, all integrated into an interactive board with drag & drop support for a visual and
        intuitive experience.
        <br><br>
        Additionally, it features an administration panel that allows administrators to monitor
        task progress, including the option to capture screenshots of workers for greater control
        and workflow tracking. I'm developing this project working under BTM Studio, in collaboration
        with Elias Montilla, the agency owner.
      `,
      image: totalTimeImg,
      tags: ["Next.js", "React", "Tailwind", "Supabase"],
      repo: "#",
      live: "https://www.total-time.app/demo"
    },
    {
      id: 2,
      title: "Victoria's Cake",
      shortDescription: "Web platform for selling and managing Victoria's Cake academy products.",
      description: `
        Victoria's Cake is a web application developed with Next.js, React, Tailwind CSS, Supabase,
        and Bunny.net, designed to digitize the academy's operations. It includes an informative
        landing page where users can learn about the brand, explore available courses and recipes,
        and access content in a clear and attractive way.
        <br><br>
        Users can register, select and purchase courses or recipes, which include videos and PDF
        materials stored securely. Once the purchase is made, the acquired content is assigned from
        the administrative panel.
        <br><br>
        The platform has a complete administration view, from which users, courses, and recipes can
        be managed, facilitating content control, sales, and student access, all from one place.
        This project was developed in collaboration with my friend Alex Contreras.
      `,
      image: victoriasCakeImg,
      tags: ["Next.js", "React", "Supabase", "Bunny.net"],
      repo: "#",
      live: "https://www.victoriascake.com/"
    },
    {
      id: 3,
      title: "BTM Studio",
      shortDescription: "BTM Studio presentation page that helps transform project ideas into a clear and structured action plan.",
      description: `
        This page is developed with Next.js, React, Tailwind CSS, multilanguage support
        (i18n), and Supabase. It also integrates the OpenAI API to enhance the user experience.
        <br><br>
        It allows users to describe their project idea and automatically convert it into an organized
        task list, helping to define the necessary steps to carry it out and expand the initial idea.
        <br><br>
        This project is being developed in collaboration with my friend Elias Montilla, owner of
        BTM Studio, combining design and development to offer a clear, practical tool oriented to
        facilitate project planning from its conceptual stage.
      `,
      image: btmStudioImg,
      tags: ["Next.js", "OpenAI", "i18n", "Supabase"],
      repo: "#",
      live: "https://www.btm-studio.com/en"
    },
    {
      id: 4,
      title: "Michelle Viloria Page",
      shortDescription: "Professional landing page for Michelle Viloria, brand strategist.",
      description: `
        Website developed with Astro for Michelle Viloria, expert in marketing, branding, and
        community management, designed to present her value proposition in a clear and attractive way.
        <br><br>
        The site integrates Decap CMS as a headless CMS, allowing simple and autonomous content
        management. The platform brings together her portfolio of work, client testimonials, and
        a sales funnel aimed at promoting her ebook.
        <br><br>
        This project was developed in collaboration with my friend Leonardo Arellano, who managed
        the initial contact with the client and collaborated on task organization and detail
        optimization during the development process.
      `,
      image: michelleViloriaImg,
      tags: ["Astro", "Decap CMS", "Marketing"],
      repo: "#",
      live: "https://www.michelleviloria.com/"
    },
    {
      id: 5,
      title: "M&Y System",
      shortDescription: "Inventory and sales management system developed for M&Y Store.",
      description: `
        Desktop system developed with Windows Forms, designed to cover the stores's operational
        needs. The application has a dashboard that displays sales in both bolivars and dollars,
        facilitating daily financial control.
        <br><br>
        The bolivar exchange rate is obtained through web scraping from the Central Bank of Venezuela
        website, with the possibility of adjusting it manually from the settings section.
        <br><br>
        The system allows managing inventory, recording sales in real-time, and performing automatic
        stock deduction for each transaction, ensuring precise control of available products.
      `,
      image: mySystemImg,
      tags: ["C#", "Windows Forms", "Web Scraping"],
      repo: "https://github.com/gitsusdav/Sistema-Tienda-M-Y",
      live: "#"
    },
    {
      id: 6,
      title: "FollowBackTool",
      shortDescription: "Web tool that analyzes your Instagram followers and shows who doesn't follow you back.",
      description: `
        FollowBackTool is a web application developed with ASP.NET, jQuery, and Bootstrap, designed
        to analyze Instagram follower and following data in a simple and fast way.
        <br><br>
        Users can upload JSON files exported from Instagram, and the platform processes the information
        to automatically identify accounts that don't follow you back.
        <br><br>
        The system offers a practical solution to manage and analyze social media relationships,
        without needing direct access to the user's account or external integrations.
      `,
      image: fbtoolImg,
      tags: ["ASP.NET", "jQuery", "Bootstrap"],
      repo: "https://github.com/gitsusdav/followBackTool",
      live: "#"
    },
    {
      id: 7,
      title: "Simple Lead Manager",
      shortDescription: "Simple system to capture and manage leads from a web form with Google Sheets storage and WhatsApp notifications.",
      description: `
        Simple Lead Manager is a web tool that allows receiving project requests from a modern form
        and automatically saves the data in Google Sheets. Each new lead can generate an instant
        WhatsApp notification, ensuring no contact is lost.
        <br><br>
        This same system is used in this site's contact form. The solution doesn't require its own
        backend, is easy to configure, free, and is designed for freelancers, agencies, and
        entrepreneurs looking for a quick and effective way to manage leads from one place.
      `,
      image: simpleLeadImg,
      tags: ["Google Sheets", "WhatsApp API", "Forms"],
      repo: "https://github.com/gitsusdav/simple-lead-manager",
      live: "#"
    },
    {
      id: 8,
      title: "Visit Escagüey",
      shortDescription: "Informative website to promote tourism in the town of Escagüey, Mérida state.",
      description: `
        It's a website developed exclusively with Tailwind CSS, created to promote the tourist
        attractions of the town of Escagüey and its surroundings. The site clearly presents tourist
        locations, as well as an accommodations section.
        <br><br>
        This project was developed for the research group led by my friend Brandon Rangel, belonging
        to the Hotel School of the Venezuelan Andes, and was used as support material for the town's
        tourism promotion.
      `,
      image: visitEscagueyImg,
      tags: ["Tailwind CSS", "Tourism"],
      repo: "https://github.com/gitsusdav/escaguey",
      live: "https://visitaescaguey.netlify.app/"
    },
    {
      id: 9,
      title: "Olas de Acuarela",
      shortDescription: "Informative website for the Olas de Acuarela inn, located on Margarita Island, Venezuela.",
      description: `
        Olas de Acuarela is a landing page developed with Tailwind CSS, created to present the inn's
        information in a clear and attractive way. The site includes sections on general information
        about the place, rooms, experiences, testimonials, work team, and a reservations section,
        making it easy for visitors to learn about the offer and make inquiries simply.
        <br><br>
        This project was developed for Luis Sánchez's team, belonging to the Hotel School of the
        Venezuelan Andes, as part of a tourism promotion support initiative.
      `,
      image: olasAcuarelaImg,
      tags: ["Tailwind CSS", "Tourism"],
      repo: "https://github.com/gitsusdav/olas-de-acuarela",
      live: "https://olasdeacuarela.netlify.app/"
    }
  ]
};

// Helper function to get projects by language
export const getProjects = (lang = 'es') => {
  return projectsData[lang] || projectsData.es;
};