import ProjectCard from "../../components/project-card"
import Section from "../../components/section"
import HeroSection from "../../sections/hero"

import NLWPlannerCover from "../../assets/projetos/rs-nlw-planner/rs-nlw-planner_cover.webp"

export default function ProjectsPage() {
  return (
    <>
      <HeroSection
        title="Projetos"
        description="Confira abaixo alguns dos projetos que desenvolvi para uso pessoal ou como estudo de caso"
      />
      <Section>
        <ul>
          <ProjectCard
            img={NLWPlannerCover}
            title="RS NLW Planner"
            description="Aplicação com versões WEB e Mobile para gerenciamento de viagens, incluindo recursos de compartilhamento de roteiros e envio de links para convidados"
            skills={["Next.js", "Expo React Native", "TypeScript", "Zod", "Tailwind CSS", "Shadcn UI", "React Query", "React Hook Form", "Prisma ORM", "PostgreSQL"]}
            link="projetos/rs-nlw-planner"
          />
        </ul>
      </Section>
    </>
  )
}
