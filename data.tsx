import { url } from "inspector";
import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench } from "lucide-react";

export const dataAboutMe = [
    {
        id: 1,
        name: "Experiencia",
        icon: <Briefcase />,
        description: "+4 años de experiencia",
    },
    {
        id: 3,
        name: "Proyectos",
        icon: <Wrench />,
        description: "+6 completados",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Inicio",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "Sobre mi",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#experience",
    },
    {
        id: 4,
        title: "Porfolio",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 5,
        title: "Contacto",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataSlider = [
    {
        id: 1,
        url: "/slider-1.jpg",
    },
    {
        id: 2,
        url: "/slider-2.jpg",
    },
    {
        id: 3,
        url: "/slider-3.jpg",
    },
    {
        id: 4,
        url: "/slider-4.jpg",
    },
]

export const dataPortfolio = [
    {
        id: 1,
        title: "RosasStore App",
        image: "/projects/rosas.png",
        urlGithub: "",
        urlDemo: "https://app.rosas-store.com/login",
    },
    {
        id: 2,
        title: "RecargasToday: LandingPage",
        image: "/projects/recargas-landingpage.png",
        urlGithub: "",
        urlDemo: "https://recargastoday.com",
    },
    {
        id: 3,
        title: "RecargasToday: WebApp",
        image: "/projects/recargas-app.png",
        urlGithub: "",
        urlDemo: "https://app.recargastoday.com/iniciar-sesion",
    },
    {
        id: 4,
        title: "Tasing Pe: Widutech",
        image: "/projects/widutech.png",
        urlGithub: "",
        urlDemo: "https://cl.widutech.com/login",
    },
    {
        id: 5,
        title: "CENDITEL: Kavac",
        image: "/projects/kavac.png",
        urlGithub: "",
        urlDemo: "https://demo-kavac.cenditel.gob.ve/sistema/login",
    },
];

export const dataTimelineExperience = [
    {
        id: 1,
        time: "Actualmente...",
        title: "RosasStore",
        url: "https://app.rosas-store.com",
        rol: 'Desarrollador Full-Stack',
        description: 'Llevé a cabo la creación y despliegue de un dashboard administrativo en un servidor VPS, optimizando los procesos de compra, facturación y entrega de productos. Esta solución permitió mejorar la eficiencia operativa y la toma de decisiones basadas en datos.',
        typeJob: "Freelancer",
    },
    {
        id: 2,
        time: "Marzo 2024",
        title: "RecargasToday CA: LandingPage",
        url: "https://recargastoday.com",
        rol: 'Desarrollador Frontend',
        description: "Creé una landing page impactante para RecargasToday CA que aumentó significativamente el número de leads generados y las conversiones.",
        typeJob: "Freelancer",
    },
    {
        id: 3,
        time: "Junio 2022 - Febrero 2024",
        title: "Tasing SAC",
        url: "https://tasing.pe",
        rol: 'Desarrollador Full-Stack',
        description: "Como miembro clave del equipo, contribuí al éxito de la migración de Widutech a Docker y a un nuevo servidor. Además, desarrollé y mantuve funcionalidades clave de la aplicación y creé un dashboard de monitoreo de las propiedades nuevas.",
        typeJob: "Empresa privada",
    },
    {
        id: 4,
        time: "Marzo a Junio 2022",
        title: "RecargasToday CA: Plataforma Web",
        url: "https://app.recargastoday.com/iniciar-sesion",
        rol: 'Desarrollador Full-Stack',
        description: "Como encargado del proyecto, lideré el desarrollo y lanzamiento exitoso de RecargasToday CA, una plataforma innovadora que transformó la forma en que los usuarios adquieren servicios. A través de la automatización de procesos, logramos mejorar significativamente la eficiencia y satisfacción del cliente.",
        typeJob: "Freelancer",
    },
    {
        id: 5,
        time: "2020 - 2022",
        title: "CENDITEL: Proyecto SINIIF",
        url: "https://bosquesdevenezuela.com/",
        rol: 'Desarrollador Full-Stack',
        description: "Desarrollé funcionalidades en los módulos de especie y árbol, así como en el Geoportal, implementando soluciones para la gestión de recursos naturales.",
        typeJob: "Empresa pública",
    },
    {
        id: 6,
        time: "2019 - 2022",
        title: "CENDITEL: Proyecto Kavac",
        url: "https://www.cenditel.gob.ve/portal/kavac-sistema-de-gestion-de-recursos/",
        rol: 'Desarrollador Full-Stack',
        description: "Colaboré estrechamente con el equipo de desarrollo de Kavac para implementar los módulos contables y de compras, asegurando su integración con el resto del sistema.",
        typeJob: "Empresa pública",
    },
];

export const dataExperience = [
    {
        id: 0,
        title: "Frameworks",
        experience: [
            {
                name: "Nuxt3",
                subtitle: "Intermedio",
                value: 60,
            },
            {
                name: "Next 14",
                subtitle: "Básico",
                value: 40,
            },
            {
                name: "Laravel",
                subtitle: "Intermedio",
                value: 80,
            },
        ],
    },
    {
        id: 1,
        title: "Frontend",
        experience: [
            {
                name: "JavaScript",
                subtitle: "Intermedio",
                value: 80,
            },
            {
                name: "TypeScript",
                subtitle: "Básico",
                value: 45,
            },
            {
                name: "VueJS",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "React",
                subtitle: "Básico",
                value: 40,
            },
            {
                name: "Tailwind CSS",
                subtitle: "Experimentado",
                value: 80,
            },
        ],
    },
    {
        id: 2,
        title: "Backend",
        experience: [
            {
                name: "Node JS",
                subtitle: "Básico",
                value: 40,
            },
            {
                name: "PHP",
                subtitle: "Experimentado",
                value: 80,
            }
        ],
    },
    {
        id: 3,
        title: "Bases de Datos",
        experience: [
            {
                name: "PostgreSQL",
                subtitle: "Experimentado",
                value: 85,
            },
            {
                name: "MySQL",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "Mongo DB",
                subtitle: "Básico",
                value: 40,
            },
        ],
    },
    {
        id: 4,
        title: "Servidores",
        experience: [
            {
                name: "Nginx",
                subtitle: "Básico",
                value: 45,
            },
            {
                name: "Docker",
                subtitle: "Básico",
                value: 35,
            },
        ],
    },
];


export const dataServices = [
    {
        id: 1,
        title: "Desarrollo Web",
        icon: <PanelsTopLeft />,
        features: [
            {
                name: "Desarrollo de sitios web personalizados",
            },
            {
                name: "Diseño y desarrollo responsive",
            },
            {
                name: "Optimización SEO",
            },
            {
                name: "Desarrollo de aplicaciones web",
            },
            {
                name: "Gestión de contenido",
            },
            {
                name: "Comercio electrónico",
            },
            {
                name: "Mantenimiento y soporte continuo",
            },
        ],
    },
    {
        id: 2,
        title: "Creación de contenido",
        icon: <BellPlus />,
        features: [
            {
                name: "Redacción de contenido original y de calidad",
            },
            {
                name: "Creación de vídeos atractivos y dinámicos",
            },
            {
                name: "Diseño gráfico para una imagen impactante",
            },
            {
                name: "Edición profesional de textos y materiales visuales",
            },
            {
                name: "Estrategias de marketing de contenidos efectivas",
            },
            {
                name: "Producción de podcasts informativos y entretenidos",
            },
            {
                name: "Generación de infografías claras y visualmente atractivas",
            },
            {
                name: "Fotografía profesional para capturar momentos excepcionales",
            },
        ],
    },
    {
        id: 3,
        title: "UI/UX Design",
        icon: <Brush />,
        features: [
            {
                name: "Diseño intuitivo para una experiencia de usuario fluida",
            },
            {
                name: "Prototipado interactivo para visualizar la interfaz",
            },
            {
                name: "Investigación de usuarios para comprender necesidades y expectativas",
            },
            {
                name: "Optimización de la usabilidad para mejorar la accesibilidad",
            },
            {
                name: "Pruebas de usabilidad para evaluar la experiencia",
            },
            {
                name: "Diseño responsive para adaptarse a diferentes dispositivos",
            },
        ],
    },
];


export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+58 424-706-0700",
        link: "https://api.whatsapp.com/send?phone=584247060700",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "@jrosasr",
        link: "https://github.com/jrosasr",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Gitlab",
        subtitle: "@jrosasr",
        link: "https://gitlab.com/jrosasr",
        icon: <Code2 />,
    },
    {
        id: 4,
        title: "Email",
        subtitle: "juan.rosasr01@gmail.com",
        link: "mailto:juan.rosasr01@gmail.com",
        icon: <Inbox />,
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile-1.jpeg",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile-3.jpeg",
    },
];