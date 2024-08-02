import FullPageSection from '@/components/full-page-scroll/full-page-section'
import SectionTitle from '@/components/ui/section-title'
import { ITranslation } from '@/lib/lang/lang'
import { cn } from '@/lib/utils'
import { ClassNameValue } from 'tailwind-merge'
import ProjectCard from './_components/project-card'

interface ISectionHomeProps {
  setActiveSection: (section: string) => void
  className?: ClassNameValue
  translation: ITranslation
}

export default function ProjectsSection({ translation, setActiveSection, className }: ISectionHomeProps) {
  return (
    <FullPageSection
      id='section_projects'
      setActiveSection={setActiveSection}
      className={cn('px-4 text-foreground h-auto min-h-screen', className)}
    >
      <div className='w-full lg:w-[80%] max-w-[1440px] mx-auto'>
        <SectionTitle>{translation.projects.title}</SectionTitle>

        <div className='mt-4 w-full flex flex-row justify-center items-start gap-x-4 flex-wrap gap-y-6'>
          {translation.projects.projects.map(project => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

      </div>
    </FullPageSection>
  )
}