import LinkButton from "../../components/link"
import Section from "../../components/section"
import { SectionParagraph, SectionPrimaryTitle } from "../../components/typography"

export default function HeroSection() {
  return (
    <Section
      id="hero"
      className="min-h-[580px] bg-hero justify-center">
      <SectionPrimaryTitle className="text-4xl">Olá, eu sou o Thiago Elias</SectionPrimaryTitle>
      <SectionParagraph className="text-center">Sou desenvolvedor especializado em aplicações web, mobile e desktop, com mais de 15 anos de experiência no desenvolvimento de softwares</SectionParagraph>
      <LinkButton href="#sobre">Conheça meu trabalho</LinkButton>
    </Section>
  )
}
