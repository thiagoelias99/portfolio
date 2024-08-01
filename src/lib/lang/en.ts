import { ITranslation } from './lang';

export const EN: ITranslation = {
  name: "Thiago Elias",
  linkedIn: "https://www.linkedin.com/in/eng-thiagoelias/",
  github: "https://github.com/thiagoelias99",
  email: "thiagoelias99@gmail.com",
  nav_items: {
    home: 'Home',
    skills: 'Skills',
    projects: 'Projects',
    services: 'Services',
    about: 'About',
    contact: 'Contact'
  },
  home: {
    title: "Applications Developer.",
    phrase: "Building solutions to impact the world.",
    welcome: "Hello, I am Thiago Elias, an electronic engineer and web, desktop, and mobile applications developer.",
    firstSkill: "Specialist in hardware and software integration and development of applications for remote control and monitoring.",
    secondSkill: "Fullstack developer of business management applications with integration of dashboard, indicators, forms, and databases, available locally or on the internet.",
    coverAlt: "My profile picture: I am a man with brown skin, bald, and a light beard. I have a confident expression and am wearing a rust-colored social shirt."
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
          { name: "Vite"},
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
  }

}