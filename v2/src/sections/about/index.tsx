import LinkButton from "../../components/link"
import Section from "../../components/section"
import { SectionParagraph, SectionPrimaryTitle, SectionSecondaryTitle } from "../../components/typography"
import Skill from "./skill"

export default function AboutSection() {
  return (
    <Section
      id="sobre">
      <SectionPrimaryTitle>Sobre mim</SectionPrimaryTitle>
      <SectionParagraph>
        Profissional com 15 anos de experiência no mercado aeroespacial e defesa nas
        áreas de desenvolvimento de sistemas, engenharia de manufatura e engenharia eletrônica
      </SectionParagraph>
      <SectionParagraph>
        Ao longo da minha carreira, trabalhei em <strong>soluções robustas e eficientes</strong> para empresas, integrando <strong>funcionalidades críticas, automações, testes</strong> e otimizando fluxos de trabalho através de tecnologias modernas
      </SectionParagraph>
      <SectionParagraph>
        Nos últimos 5 anos, adquiri uma vasta experiência na criação, manutenção e integração de sistemas ERP, desenvolvendo <strong>softwares personalizados</strong> com foco na gestão,
        rastreabilidade e controle de qualidade, que atendem às necessidades específicas de negócios em diversos setores
      </SectionParagraph>
      <SectionParagraph>
        Com uma mentalidade orientada a resultados e uma paixão pela inovação, estou constantemente aprimorando minhas habilidades para acompanhar as tendências do mercado
      </SectionParagraph>
      <LinkButton href="#contato">Entre em contato</LinkButton>
      <SectionSecondaryTitle
        className="pt-8"
      >Minhas Principais Habilidades</SectionSecondaryTitle>
      <ul className="w-full flex justify-start flex-wrap gap-4">
        <Skill>Front End</Skill>
        <Skill>Back End</Skill>
        <Skill>React</Skill>
        <Skill>Next.js</Skill>
        <Skill>Expo React Native</Skill>
        <Skill>Node.js</Skill>
        <Skill>Nest.js</Skill>
        <Skill>Typescript</Skill>
        <Skill>Laravel</Skill>
        <Skill>PHP</Skill>
        <Skill>HTML</Skill>
        <Skill>Design Responsivo</Skill>
      </ul>
    </Section>
  )
}
