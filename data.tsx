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
        description: "+10 completados",
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
    // {
    //     id: 3,
    //     title: "Book",
    //     icon: <BookText size={20} />,
    //     link: "#services",
    // },
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
        title: "RecargasToday",
        image: "/projects/recargas-landingpage.png",
        urlGithub: "",
        urlDemo: "https://recargastoday.com",
    },
    {
        id: 2,
        title: "WebApp RecargasToday",
        image: "/projects/recargas-app.png",
        urlGithub: "",
        urlDemo: "https://app.recargastoday.com/iniciar-sesion",
    },
    {
        id: 3,
        title: "Web CoinMarketCap",
        image: "/projects/coinmarket.png",
        urlGithub: "https://gitlab.com/jrosasr/vue-coin-market/-/tree/master?ref_type=heads",
        urlDemo: "https://coin-marketplace-online.web.app/#/",
    },
    {
        id: 4,
        title: "RosasStore App",
        image: "/projects/rosas.png",
        urlGithub: "",
        urlDemo: "https://app.rosas-store.com/login",
    },
    // {
    //     id: 5,
    //     title: "Sitios Web Impactantes",
    //     image: "/projects/image-5.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 6,
    //     title: "Proyectos Web Dinámicos",
    //     image: "/projects/image-6.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
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
                subtitle: "Experimentado",
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
                subtitle: "Experimentado",
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
        link: "tel:+584247060700",
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
        link: "mailto:test@test.com",
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