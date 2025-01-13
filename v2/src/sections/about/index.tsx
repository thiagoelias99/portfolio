import LinkButton from "../../components/link"
import Section from "../../components/section"
import SkillItem from "../../components/skill-item"
import { SectionParagraph, SectionPrimaryTitle, SectionSecondaryTitle } from "../../components/typography"

export default function AboutSection() {
  return (
    <Section
      id="sobre">
      <SectionPrimaryTitle>Sobre mim</SectionPrimaryTitle>
      <div className="w-full container flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4 lg:gap-40">
        <div className="w-full flex flex-col items-center justify-start gap-4">
          <SectionSecondaryTitle
            className="pt-8"
          >Conheça Me</SectionSecondaryTitle>
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
        </div>
        <div className="w-full flex flex-col items-center justify-start gap-4">
          <SectionSecondaryTitle
            className="pt-8"
          >Minhas Principais Habilidades</SectionSecondaryTitle>
          <ul className="w-full flex justify-start flex-wrap gap-4">
            <SkillItem>Front End</SkillItem>
            <SkillItem>Back End</SkillItem>
            <SkillItem>React</SkillItem>
            <SkillItem>Next.js</SkillItem>
            <SkillItem>Expo React Native</SkillItem>
            <SkillItem>Node.js</SkillItem>
            <SkillItem>Nest.js</SkillItem>
            <SkillItem>Typescript</SkillItem>
            <SkillItem>Laravel</SkillItem>
            <SkillItem>PHP</SkillItem>
            <SkillItem>HTML</SkillItem>
            <SkillItem>Design Responsivo</SkillItem>
          </ul>
        </div >
      </div>
    </Section>
  )
}
