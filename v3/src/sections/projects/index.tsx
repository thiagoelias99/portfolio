import ProjectCard from "@/components/project-card"
import Section from "@/components/section"
import { SectionParagraph, SectionPrimaryTitle } from "@/components/typography"

import { projects } from "@/data"

export default function ProjectsSection() {
  return (
    <Section
      id="projetos"
      className="bg-white"
    >
      <div className="w-full container sm:mx-auto flex flex-col items-center justify-start gap-4">
        <SectionPrimaryTitle>Projetos</SectionPrimaryTitle>
        <SectionParagraph
          className="text-center"
        >Confira uma seleção de projetos desenvolvidos para uso pessoal e estudos de caso.</SectionParagraph>
        <ul className="w-full flex flex-col justify-start flex-wrap gap-4 sm:gap-0">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </ul>
      </div>
    </Section>
  )
}
