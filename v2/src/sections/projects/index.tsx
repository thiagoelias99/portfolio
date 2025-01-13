import ProjectCard from "../../components/project-card"
import Section from "../../components/section"
// import { SectionParagraph, SectionPrimaryTitle } from "../../components/typography"
import { SectionParagraph, SectionPrimaryTitle } from "@/components/typography"


import RsNlwPlannerCoverImage from "../../assets/projetos/rs-nlw-planner/rs-nlw-planner_cover.webp"

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
          <ProjectCard
            img={RsNlwPlannerCoverImage}
            title="RS NLW Planner"
            description="Aplicação com versões WEB e Mobile para gerenciamento de viagens, incluindo recursos de compartilhamento de roteiros e envio de links para convidados"
            skills={["Next.Js", "React Native", "TypeScript"]}
            link="/projetos/rs-nlw-planner"
          />
          <ProjectCard
            img={RsNlwPlannerCoverImage}
            title="RS NLW Planner"
            description="Aplicação com versões WEB e Mobile para gerenciamento de viagens, incluindo recursos de compartilhamento de roteiros e envio de links para convidados"
            skills={["Next.Js", "React Native", "TypeScript"]}
            link="/projetos/rs-nlw-planner"
          />
          <ProjectCard
            img={RsNlwPlannerCoverImage}
            title="RS NLW Planner"
            description="Aplicação com versões WEB e Mobile para gerenciamento de viagens, incluindo recursos de compartilhamento de roteiros e envio de links para convidados"
            skills={["Next.Js", "React Native", "TypeScript"]}
            link="/projetos/rs-nlw-planner"
          />
        </ul>
      </div>
    </Section>
  )
}
