import { AboutSection, HeroSection, ProjectsSection } from "@/sections"

export default function MainPage() {
  return (
    <>
      <HeroSection
        id="hero"
        title="Olá, eu sou o Thiago Elias"
        description="Sou desenvolvedor especializado em aplicações web, mobile e desktop, com mais de 15 anos de experiência no desenvolvimento de software"
        linkLabel="Conheça meu trabalho"
        link="/projetos"
      />
      <AboutSection />
      <ProjectsSection />
    </>
  )
}
