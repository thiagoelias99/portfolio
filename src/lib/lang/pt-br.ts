import { ITranslation } from './lang';

export const PT_BR: ITranslation = {
  name: "Thiago Elias",
  linkedIn: "https://www.linkedin.com/in/eng-thiagoelias/",
  github: "https://github.com/thiagoelias99",
  email: "thiagoelias99@gmail.com",
  nav_items: {
    home: 'Início',
    skills: 'Habilidades',
    projects: 'Projetos',
    services: 'Serviços',
    about: 'Sobre',
    contact: 'Contato'
  },
  home: {
    title: "Desenvolvedor de Aplicações.",
    phrase: "Construindo soluções para impactar o mundo.",
    welcome: "Olá, eu sou Thiago Elias, engenheiro eletrônico e desenvolvedor de aplicativos web, desktop e mobile.",
    firstSkill: "Especialista em integração de hardware com software e desenvolvimento de aplicações para controle e monitoramento remoto.",
    secondSkill: "Desenvolvedor fullstack de aplicações para gerenciamento empresarial com integração de dashboard, indicadores, formulários e banco de dados, disponibilizadas localmente ou na internet.",
    coverAlt: "Minha foto de perfil. Sou um homem de pele morena, careca e barba leve. Estou com uma expressão confiante e estou vestindo uma camisa social com cor de ferrugem."
  },
  skills: {
    title: "Habilidades",
    skills: [
      {
        name: "Desenvolvedor Frontend",
        description: "Criação e otimização da interface do usuário de um site ou aplicativo. Isso inclui codificar o layout, estilizar elementos usando HTML, CSS e JavaScript, e garantir que a experiência do usuário seja agradável e funcional.",
        imageUrl: "/frontend.jpg",
        stacks: [
          { name: "HTML" },
          { name: "CSS" },
          { name: "TypeScript" },
          { name: "React" },
          { name: "Vite" },
          { name: "Next.js" },
          { name: "Tailwind CSS" },
        ]
      },
      {
        name: "Desenvolvedor Backend",
        description: "Criação e manutenção da parte do servidor de um aplicativo ou site. Isso inclui gerenciar bancos de dados, implementar lógica de negócios, otimizar o desempenho, acessar serviços de terceiros e garantir a segurança dos sistemas.",
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
        name: "Desenvolvedor Web",
        description: "Criação de sites e aplicativos completos hospedados e acessados pela internet ou intranet. Otimizando a integração do front-end com o back-end, garantindo performance, disponibilidade e segurança.",
        imageUrl: "/web.jpg",
        stacks: [
          { name: "Vite" },
          { name: "Next.js" },
          { name: "Tailwind CSS" },
          { name: "Prisma" },
          { name: "Wordpress" },
          { name: "PostgreSQL" },
          { name: "MySQL" },
          { name: "MongoDB" },
          { name: "Firebase" }
        ]
      },
      {
        name: "Desenvolvedor Mobile",
        description: "Criação de aplicativos para dispositivos móveis, como smartphones e tablets. Utilizando tecnologias específicas para Android e iOS, garantindo a melhor experiência do usuário e a integração com as funcionalidades nativas dos dispositivos.",
        imageUrl: "/mobile.jpg",
        stacks: [
          { name: "TypeScript" },
          { name: "React Native" },
          { name: "Expo" },
          { name: "Kotlin" },
          { name: "Jetpack Compose" },
          { name: "Swift" },
          { name: "Swift UI" },
        ]
      },
      {
        name: "Desenvolvedor Desktop",
        description: "Criação aplicativos que são executados diretamente em computadores pessoais.  Programas para Windows, macOS ou Linux, que oferecem funcionalidades específicas para os usuários.",
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
        name: "Dispositivos Embarcados",
        description: "Criação e otimização de software para dispositivos específicos, como microcontroladores, módulos de comunicação e sistemas embarcados em geral para aplicações como dispositivos ioT, automóveis, eletrodomésticos.",
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
        name: "Comunicação Indústrial",
        description: "Criação e otimização de sistemas de comunicação entre equipamentos industriais, como CLPs, IHMs, sensores, atuadores, e sistemas de supervisão e controle.",
        imageUrl: "/conn.jpg",
        stacks: [
          { name: "Serial" },
          { name: "CAN-Open" },
          { name: "Profinet" },
          { name: "Ethernet/IP" },
          { name: "Wifi" },
          { name: "Bluetooth" },
          { name: "MQTT" }
        ]
      }
    ]
  },
  projects: {
    title: "Projetos",
    projects: [
      {
        name: "Planner",
        description: "Sistema proprietário desenvolvido para minha organização pessoal. Reúne funcionalidades de diversos aplicativos comumente utilizados para organização pessoal, financeira e profissional, porém integrados, possibilitando um controle e monitoramento automático em uma única tela.",
        imageUrl: "/projects/cards/planner_main.png",
        stacks: [
          { name: "Nest.JS" },
          { name: "Next.JS" },
          { name: "Typescript" },
          { name: "Tailwind CSS" },
          { name: "Prisma" },
          { name: "PostgreSQL" },
          { name: "Pupperteer" }
        ]
      },
      {
        name: "Imagem para Texto",
        description: "Projeto de inteligência artificial desenvolvido com o objetivo de gerar descrição textual de imagens (alt) para ajudar na acessibilidade de sites e aplicativos.",
        imageUrl: "/projects/cards/image_text_main.png",
        stacks: [
          { name: "Google AI Studio" },
          { name: "Gemini AI" },
          { name: "Next.JS" },
          { name: "Typescript" },
          { name: "Tailwind CSS" },
          { name: "Radix UI" }
        ]
      },
      {
        name: "FSW Food",
        description: "Projeto proposto pela escola Full Stack Club, mas desenvolvido de acordo com minha escolha de tecnologias, onde o objetivo é criar a interface, autenticação e algumas regras de negócio de uma aplicação de delivery de comidas.",
        imageUrl: "/projects/cards/fsw_food_main.png",
        stacks: [
          { name: "Next.JS" },
          { name: "TypeScript" },
          { name: "Tailwind CSS" },
          { name: "Next Auth"},
          { name: "Firebase" },
          { name: "Prisma" },
          { name: "PostgreSQL" }
        ]
      },
      {
        name: "Trazler",
        description: "Projeto front-end desenvolvido para a pós-graduação de desenvolvimento fullstack utilizando a tecnologia Jamstack com Next e Gatsby, simulando um blog de destinos de viagem, com artigos escritos na liguagem .mdx.",
        imageUrl: "/projects/cards/trazler_main.png",
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
  }
}