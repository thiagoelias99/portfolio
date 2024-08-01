import FullPageSection from '@/components/full-page-scroll/full-page-section'
import { ITranslation } from '@/lib/lang/lang'
import { cn } from '@/lib/utils'
import { ClassNameValue } from 'tailwind-merge'
import SkillCard from './_components/skill-card'
import SectionTitle from '@/components/ui/section-title'

interface ISectionHomeProps {
  setActiveSection: (section: string) => void
  className?: ClassNameValue
  translation: ITranslation
}

export default function SkillsSection({ translation, setActiveSection, className }: ISectionHomeProps) {
  return (
    <FullPageSection
      id='section_skills'
      setActiveSection={setActiveSection}
      className={cn('px-4 text-foreground h-auto', className)}
    >
      <div className='w-full lg:w-[80%] max-w-[1440px] mx-auto'>
        <SectionTitle>{translation.skills.title}</SectionTitle>

        <div className='mt-4 w-full space-y-10'>
          {translation.skills.skills.map(skill => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

      </div>
    </FullPageSection>
  )
}