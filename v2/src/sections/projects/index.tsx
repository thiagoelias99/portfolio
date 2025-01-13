import ProjectCard from "../../components/project-card"
import Section from "../../components/section"
import { SectionParagraph, SectionPrimaryTitle } from "../../components/typography"

import RsNlwPlannerCoverImage from "../../assets/projetos/rs-nlw-planner/rs-nlw-planner_cover.webp"

export default function ProjectsSection() {
  return (
    <Section
      id="projetos"
      className="bg-white"
    >
      <SectionPrimaryTitle>Projetos</SectionPrimaryTitle>
      <SectionParagraph
        className="text-center"
      >Confira uma seleção de projetos desenvolvidos para uso pessoal e estudos de caso.</SectionParagraph>
      <ul className="w-full flex flex-col justify-start flex-wrap gap-4">
        <ProjectCard
          img={RsNlwPlannerCoverImage}
          title="RS NLW Planner"
          description="Aplicação com versões WEB e Mobile para gerenciamento de viagens, incluindo recursos de compartilhamento de roteiros e envio de links para convidados."
          skills={["Next.Js", "React Native", "TypeScript"]}
        />
      </ul>
    </Section>
  )
}
