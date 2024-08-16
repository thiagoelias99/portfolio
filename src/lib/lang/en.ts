import { ITranslation } from './lang';

export const EN: ITranslation = {
  name: "Thiago Elias",
  linkedIn: "https://www.linkedin.com/in/eng-thiagoelias/",
  github: "https://github.com/thiagoelias99",
  email: "contato@thiagoeliaseng.com.br",
  instagram: "https://www.instagram.com/telias99/",
  phone: "+55 12 99729-8442",
  whatsapp: "https://wa.me/5512997298442",
  address: "São José dos Campos, SP, Brazil",
  addressLink: "https://www.google.com/maps/place/S%C3%A3o+Jos%C3%A9+dos+Campos,+SP/@-23.1895062,-45.8630127,37057m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94cc4bb3858cc2e7:0xba25a33168f8c1!8m2!3d-23.2198396!4d-45.8915658!16zL20vMDNiY3F6?entry=ttu",
  contactPhrase: "Contact me",
  finalPhrase: "Thanks for visiting",
  lang: "en",
  nav_items: {
    home: 'Home',
    skills: 'Skills',
    projects: 'Projects',
    services: 'Services',
    about: 'About',
    contact: 'Contact'
  },
  home: {
    hello: "Hello I'm ",
    title: "Developer",
    words: ["Fullstack", "Mobile", "Desktop", "Embedded"],
    phrase: "Building solutions to impact the world.",
    welcome: "Hello, I am Thiago Elias, an electronic engineer and web, desktop, and mobile applications developer.",
    firstSkill: "Specialist in hardware/software integration and development of applications for remote control and monitoring.",
    secondSkill: "fullstack developer of business management applications with integration of dashboard, indicators, forms, and databases, available locally or on the internet.",
    coverAlt: "My profile picture: I am a man with brown skin, bald, and a light beard. I have a confident expression and am wearing a rust-colored social shirt.",
    contact: "Contact me"
  },
  skills: {
    title: "Skills",
    skills: [
      {
        name: "Frontend Developer",
        description: "Creating and optimizing the user interface of a website or application. This includes coding the layout, styling elements using HTML, CSS, and JavaScript, and ensuring the user experience is pleasant and functional.",
        imageUrl: "/frontend.jpg",
        stacks: [
          { name: "HTML" },
          { name: "CSS" },
          { name: "TypeScript" },
          { name: "React" },
          { name: "Vite" },
          { name: "Next.js" },
          { name: "Tailwind CSS" }
        ]
      },
      {
        name: "Backend Developer",
        description: "Creating and maintaining the server-side of an application or website. This includes managing databases, implementing business logic, optimizing performance, accessing third-party services, and ensuring system security.",
        imageUrl: "/backend.jpg",
        stacks: [
          { name: "TypeScript" },
          { name: "C++" },
          { name: "Rust" },
          { name: "Node.js" },
          { name: "Express" },
          { name: "Nest.js" },
          { name: "Prisma" },
          { name: "PostgreSQL" },
          { name: "MySQL" },
          { name: "MongoDB" },
          { name: "Firebase" },
          { name: "Redis" }
        ]
      },
      {
        name: "Web Developer",
        description: "Creating complete websites and applications hosted and accessed via the internet or intranet. Optimizing the integration of front-end and back-end, ensuring performance, availability, and security.",
        imageUrl: "/web.jpg",
        stacks: [
          { name: "Vite" },
          { name: "Next.js" },
          { name: "Tailwind CSS" },
          { name: "Prisma" },
          { name: "WordPress" },
          { name: "PostgreSQL" },
          { name: "MySQL" },
          { name: "MongoDB" },
          { name: "Firebase" }
        ]
      },
      {
        name: "Mobile Developer",
        description: "Creating applications for mobile devices such as smartphones and tablets. Utilizing specific technologies for Android and iOS, ensuring the best user experience and integration with the native functionalities of the devices.",
        imageUrl: "/mobile.jpg",
        stacks: [
          { name: "TypeScript" },
          { name: "React Native" },
          { name: "Expo" },
          { name: "Kotlin" },
          { name: "Jetpack Compose" },
          { name: "Swift" },
          { name: "SwiftUI" }
        ]
      },
      {
        name: "Desktop Developer",
        description: "Creating applications that run directly on personal computers. Programs for Windows, macOS, or Linux, offering specific functionalities for users.",
        imageUrl: "/desktop.jpg",
        stacks: [
          { name: "C++" },
          { name: "Rust" },
          { name: "Tauri" },
          { name: "Vite" },
          { name: "SQLite" }
        ]
      },
      {
        name: "Embedded Devices",
        description: "Creating and optimizing software for specific devices such as microcontrollers, communication modules, and embedded systems in general for applications like IoT devices, automobiles, and home appliances.",
        imageUrl: "/embedded.jpg",
        stacks: [
          { name: "C++" },
          { name: "Rust" },
          { name: "Arduino" },
          { name: "Raspberry Pi" },
          { name: "ESP32" }
        ]
      },
      {
        name: "Industrial Communication",
        description: "Creating and optimizing communication systems between industrial equipment such as PLCs, HMIs, sensors, actuators, and supervisory and control systems.",
        imageUrl: "/conn.jpg",
        stacks: [
          { name: "Serial" },
          { name: "CAN-Open" },
          { name: "Profinet" },
          { name: "Ethernet/IP" },
          { name: "WiFi" },
          { name: "Bluetooth" },
          { name: "MQTT" }
        ]
      }
    ]
  },
  projects: {
    title: "Projetos",
    presentation: "These are some of the projects I have developed recently.",
    deploy: "Deploy",
    repository: "Repository",
    projects: [
      {
        name: "Planner",
        description: "Proprietary system developed for my personal organization. It combines functionalities of various commonly used apps for personal, financial, and professional organization, but integrated, allowing automatic control and monitoring on a single screen.",
        imageUrl: "/projects/cards/planner_main.webp",
        repositoryUrl: "https://github.com/thiagoelias99/planner-nest2",
        stacks: [
          { name: "Nest.JS" },
          { name: "Next.JS" },
          { name: "TypeScript" },
          { name: "Tailwind CSS" },
          { name: "Prisma" },
          { name: "PostgreSQL" },
          { name: "Puppeteer" }
        ]
      },
      {
        name: "Image to Text",
        description: "Artificial intelligence project developed to generate textual descriptions of images (alt) to aid in the accessibility of websites and applications.",
        imageUrl: "/projects/cards/image_text_main.webp",
        repositoryUrl: "https://github.com/thiagoelias99/image-description",
        deployUrl: "https://image-description-seven.vercel.app/",
        stacks: [
          { name: "Google AI Studio" },
          { name: "Gemini AI" },
          { name: "Next.JS" },
          { name: "TypeScript" },
          { name: "Tailwind CSS" },
          { name: "Radix UI" }
        ]
      },
      {
        name: "Logins",
        description: "User authentication study project using Next Auth with email and social media authentication.",
        imageUrl: "/projects/cards/login_main.webp",
        repositoryUrl: "https://github.com/thiagoelias99/login",
        deployUrl: "https://login-azure-psi.vercel.app/",
        stacks: [
          { name: "Next.JS" },
          { name: "TypeScript" },
          { name: "Tailwind CSS" },
          { name: "Next Auth" },
          { name: "Oauth" },
        ]
      },
      {
        name: "FSW Food",
        description: "Project proposed by the Full Stack Club school, but developed according to my choice of technologies, where the objective is to create the interface, authentication, and some business rules of a food delivery application.",
        imageUrl: "/projects/cards/fsw_food_main.webp",
        repositoryUrl: "https://github.com/thiagoelias99/fsw-food",
        deployUrl: "https://fsw-food-nine.vercel.app/",
        stacks: [
          { name: "Next.JS" },
          { name: "TypeScript" },
          { name: "Tailwind CSS" },
          { name: "Next Auth" },
          { name: "Firebase" },
          { name: "Prisma" },
          { name: "PostgreSQL" }
        ]
      },
      {
        name: "Trazler",
        description: "Front-end project developed for the specialization course in fullstack development using Jamstack technology with Next and Gatsby, simulating a travel destination blog, with articles written in .mdx language.",
        imageUrl: "/projects/cards/trazler_main.webp",
        repositoryUrl: "https://github.com/thiagoelias99/infnet-projeto-jamstack-next",
        deployUrl: "https://infnet-projeto-jamstack-next.vercel.app/",
        stacks: [
          { name: "Jamstack" },
          { name: "Next.JS" },
          { name: "Gatsby" },
          { name: "MDX" },
          { name: "Tailwind CSS" },
          { name: "Firebase" },
          { name: "Firestore" }
        ]
      }
    ]

  },
  about: {
    title: "About me",
    presentation: "Hello, I am Thiago Elias,",
    emphasis: "electronic engineer and developer",
    presentationContinuation: "of web, desktop and mobile applications.",
    presentation2: "Specialist in hardware/software integration and development of applications for remote control and monitoring.",
    listItems: [
      "Graduated in electronic engineering, with emphasis on embedded devices, programming, automation, and control.",
      "Specialist in the development of modern web, desktop, and mobile applications, integrating wifi, bluetooth, and iot connectivities.",
      "Developer of applications for business management with integration of dashboard, indicators, forms, and databases."
    ],
    skills: "Skills",
    skillsNote: "These are some of the technologies I use the most currently, but I'm always learning new technologies and tools to improve my skills.",
    webFramework: "Web Framework",
    mobileFramework: "Mobile Framework",
    desktopFramework: "Desktop Framework",
    backendFramework: "Backend Framework",
    database: "Database",
    language: "Language"
  },
  services: {
    title: "My Services",
    description: "Discover the services I offer to help you build your application.",
    showMore: "Show more",
    showLess: "Show less",
    services: [
      {
        name: "App Development for Small Businesses",
        description: "A custom app, developed to meet your specific needs. Specializing in creating mobile solutions for small businesses, I offer intuitive, functional, and user-friendly apps that help improve operational efficiency, increase customer engagement, and boost sales.",
        description2: "Whether it's managing orders, offering a unique service to customers, or facilitating internal communication, I'm here to turn your idea into reality. The entire process is done in collaboration with you, from planning and design to development and launch, ensuring the app reflects your business's identity and provides an exceptional user experience."
      },
      {
        name: "Creation, Support, and Maintenance of Websites and Landing Pages",
        description: "Enhance your online presence with professional, optimized websites and landing pages ready to convert. I offer comprehensive services that include everything from creation and design to ongoing support and regular maintenance, ensuring your site is always up-to-date and functioning perfectly.",
        description2: "I work to develop solutions that reflect your brand's identity and meet your business goals, whether it's showcasing your portfolio, capturing leads, or selling products. Additionally, I provide technical support to quickly resolve issues and preventive maintenance to avoid failures, ensuring a smooth and efficient digital experience for your users."
      },
      {
        name: "Collaboration and Assistance to Startups in Developing Prototypes of Systems, Applications, and Devices",
        description: "Drive your startup's innovation with my support in developing prototypes. I offer direct collaboration and technical assistance to turn your ideas into reality, whether in developing systems, applications, or devices.",
        description2: "I understand the challenges and agility that startups require, so I work to create functional prototypes ready for testing, allowing you to validate concepts quickly and attract investors with confidence. From strategic planning to technical execution, I am committed to delivering creative and effective solutions that meet the specific needs of your project, always aligned with your business objectives."
      },
      {
        name: "Software Requirements and Feasibility Analysis",
        description: "Ensure the success of your software project with a detailed requirements and feasibility analysis. I can help you clearly define your system's needs, identify potential challenges, and assess technical and economic feasibility before starting development.",
        description2: "I work closely with your team to understand the project's expectations, desired functionalities, and constraints, providing a comprehensive report that guides the next steps. With this analysis, you will have a clear and realistic view of the project's scope, timelines, costs, and necessary resources, ensuring that development stays on the right track from the start."
      },
      {
        name: "End-to-End API Testing",
        description: "Ensure the quality and reliability of your APIs with a comprehensive End-to-End Testing service. I offer thorough tests that simulate real-world usage scenarios, checking the integration, performance, and security of your APIs from start to finish.",
        description2: "My process involves testing every data flow and system interaction, ensuring that all API functionalities work as expected in various environments. This way, you can launch your products with the confidence that your APIs are robust, efficient, and ready to meet user demands."
      }
    ]
  }
  
}