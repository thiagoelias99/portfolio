import Section from "../../components/section"
import { SectionParagraph, SectionPrimaryTitle } from "../../components/typography"

export default function ProjectsSection() {
  return (
    <Section
      id="projetos"
      className="bg-white"
    >
      <SectionPrimaryTitle>Projetos</SectionPrimaryTitle>
      <SectionParagraph
        className="text-center"
      >Aqui você encontra uma seleção de projetos desenvolvidos para uso pessoal e estudo de casos</SectionParagraph>
    </Section>
  )
}
