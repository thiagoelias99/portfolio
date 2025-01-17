import ImageSlider from "@/components/image-slider"
import LinkButton from "@/components/link"
import Section from "@/components/section"
import { projects } from "@/data"
import { HeroSection, ProjectStackSection } from "@/sections"
import { useMemo } from "react"
import { useParams } from "react-router"

export default function ProjectPage() {
  const { slug } = useParams()

  const project: Project | undefined = useMemo(() => {
    return projects.find(project => project.slug === slug)
  }, [slug])

  return (
    <>
      {
        project ? (
          <>
            <HeroSection
              title={project.name}
              description={project.shortDescription}
              link={project.demoUrl}
              linkLabel={project.demoUrl ? "Acesse a aplicação" : undefined}
            />
            <section className="container mx-auto">
              <ImageSlider images={project.images} className="h-96 sm:h-full lg:max-w-[720px]" />
            </section>
            <Section
              id="project-html-content"
              className="container mx-auto lg:space-y-6"
              dangerouslySetInnerHTML={{
                __html: project._html
              }}
            >
            </Section>
            <ProjectStackSection
              stacks={project.allStacks}
            />
            <Section>
              <LinkButton to="/projetos" className="sm:self-center">Ver outros projetos</LinkButton>
            </Section>
          </>

        ) : (
          <HeroSection
            title="Projeto não encontrado"
            description="O projeto que você está tentando acessar não existe."
            link="/projetos"
            linkLabel="Voltar para projetos"
          />
        )
      }
    </>
  )
}
