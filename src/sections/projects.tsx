import FullPageSection from '@/components/full-page-scroll/full-page-section'
import SectionTitle from '@/components/ui/section-title'
import { ITranslation } from '@/lib/lang/lang'
import { cn } from '@/lib/utils'
import { ClassNameValue } from 'tailwind-merge'
import ProjectCard from './_components/project-card'
import SectionP from '@/components/ui/section-p'

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
      className={cn('max-w-screen-xl mx-auto px-4 h-auto', className)}
    >
      <SectionTitle>{translation.projects.title}</SectionTitle>
      <SectionP className='mt-4'>{translation.projects.presentation}</SectionP>

      <div className='mt-8 md:mt-16 w-full flex flex-col justify-start items-start gap-8 md:gap-32'>
        {translation.projects.projects.map(project => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </FullPageSection>
  )
}