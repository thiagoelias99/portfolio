import AboutSection from "../../sections/about"
import HeroSection from "../../sections/hero"
import ProjectsSection from "../../sections/projects"

export default function MainPage() {
  return (
    <>
      <HeroSection
        id="hero"
        title="Olá, eu sou o Thiago Elias"
        description="Sou desenvolvedor especializado em aplicações web, mobile e desktop, com mais de 15 anos de experiência no desenvolvimento de software"
        linkLabel="Conheça meu trabalho"
        link="#projetos"
      />
      <AboutSection />
      <ProjectsSection />
    </>
  )
}
