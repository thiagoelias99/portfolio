import { projects } from "@/data"
import ProjectCard from "../../components/project-card"
import Section from "../../components/section"
import HeroSection from "../../sections/hero"

export default function ProjectsPage() {
  return (
    <>
      <HeroSection
        title="Projetos"
        description="Confira abaixo alguns dos projetos que desenvolvi para uso pessoal ou como estudo de caso"
      />
      <Section>
        <ul className="w-full container">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </ul>
      </Section>
    </>
  )
}
