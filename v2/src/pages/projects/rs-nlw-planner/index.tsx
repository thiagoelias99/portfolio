import ImageSlider from "../../../components/image-slider"
import HeroSection from "../../../sections/hero"

import ProjectStackSection from "../../../sections/project-stacks"

import Image1 from "../../../assets/projetos/rs-nlw-planner/rs-nlw-planner_cover.webp"
import Image2 from "../../../assets/projetos/rs-nlw-planner/rs-nlw-planner_img2.webp"
import Image3 from "../../../assets/projetos/rs-nlw-planner/rs-nlw-planner_img3.webp"
import Image4 from "../../../assets/projetos/rs-nlw-planner/expo1.png"
import Image5 from "../../../assets/projetos/rs-nlw-planner/expo2.png"
import LinkButton from "../../../components/link"
import Section from "../../../components/section"
import { ExternalLink, SectionParagraph, SectionSecondaryTitle } from "../../../components/typography"

export default function RsNlwPlanner() {
  const images = [
    { image: Image1, alt: "RS NLW Planner Capa" },
    { image: Image2, alt: "RS NLW Planner 1" },
    { image: Image3, alt: "RS NLW Planner 2" },
    { image: Image4, alt: "RS NLW Planner Expo 1" },
    { image: Image5, alt: "RS NLW Planner Expo 2" },
  ]

  return (
    <div>
      <HeroSection
        title="RS NLW Planner"
        description="Aplicação com versões WEB e Mobile para gerenciamento de viagens, incluindo recursos de compartilhamento de roteiros e envio de links para convidados"
        link="https://rs-nlw-planner.vercel.app/"
        linkLabel="Acesse a aplicação"
      />
      <section>
        <ImageSlider images={images} className="h-96 sm:h-full" />
      </section>
      <Section>
        <SectionSecondaryTitle>Sobre o Projeto</SectionSecondaryTitle>
        <SectionParagraph>
          Aplicação proposta durante o evento da <ExternalLink href="https://www.rocketseat.com.br/">Rocketseat</ExternalLink>, cujo objetivo foi a construção de um sistema para controle e gerenciamento de viagens, composto por back-end, front-end web e versão mobile.
        </SectionParagraph>
        <SectionParagraph>
          A aplicação possui recursos como formulário <i>multi-step</i>, validação de campos digitados, restrição de datas, envio de e-mails, gerenciamento de convites, compartilhamento de links e edição e acompanhamento colaborativos do roteiro.
        </SectionParagraph>

        <SectionSecondaryTitle>Versão Web em Next.js</SectionSecondaryTitle>
        <SectionParagraph>
          Para a implementação da versão web, decidi utilizar o <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink> como uma aplicação stand-alone, integrando também a função do back-end e conexão à banco de dados PostgreSQL.
        </SectionParagraph>
        <SectionParagraph>
          Como aprofundamento de conhecimento, resolvi incluir a função de login utilizando <i>magic link</i>, onde apenas o e-mail é necessário e um código de acesso é enviado para o e-mail do solicitante. Esse sistema também é utilizado para validação do usuário.
        </SectionParagraph>
        <LinkButton href="https://rs-nlw-planner.vercel.app/" target="_blank">Acesse a aplicação</LinkButton>

        <SectionSecondaryTitle>Versão Mobile em Expo React Native</SectionSecondaryTitle>
        <SectionParagraph>
          Para a versão mobile híbrida, destinada a dispositivos Android e iOS, optei por utilizar a API disponibilizada para o projeto. Além disso, otimizei a interface para oferecer uma experiência de usuário (UX) moderna e agradável, com foco em telas touch.
        </SectionParagraph>
        <SectionParagraph>
          Como principal recurso de otimização, utilizei o <ExternalLink href="https://tanstack.com/query/v5/docs/framework/react/overview">React Query</ExternalLink> para gerenciamento de estado e cache, reduzindo a frequência e o tamanho das requisições, resultando em uma aplicação mais performática.
        </SectionParagraph>
      </Section>
      <ProjectStackSection
        stacks={[
          "Next.js",
          "Expo React Native",
          "TypeScript",
          "Zod",
          "Tailwind CSS",
          "Shadcn UI",
          "React Query",
          "React Hook Form",
          "Prisma ORM",
          "PostgreSQL",
        ]}
      />
      <Section>
        <LinkButton href="/projetos" className="sm:self-center">Ver outros projetos</LinkButton>
      </Section>
    </div>
  )
}
