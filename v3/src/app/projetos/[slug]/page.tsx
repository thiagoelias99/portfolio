import ImageSlider from "@/components/image-slider"
import LinkButton from "@/components/link"
import Section from "@/components/section"
import { projects } from "@/data"
import { HeroSection, ProjectStackSection } from "@/sections"

export async function generateStaticParams() {
  return projects.map(project => ({
    slug: project.slug
  }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const project: Project | undefined = projects.find(project => project.slug === slug)

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
              <LinkButton href="/projetos" className="sm:self-center">Ver outros projetos</LinkButton>
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
