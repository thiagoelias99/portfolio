import FullPageSection from '@/components/full-page-scroll/full-page-section'
import { cn } from '@/lib/utils'
import { ClassNameValue } from 'tailwind-merge'

interface ISectionHomeProps {
  setActiveSection: (section: string) => void
  className?: ClassNameValue
}

export default function SkillsSection({ setActiveSection, className }: ISectionHomeProps) {
  return (
    <FullPageSection
      id='section_skills'
      setActiveSection={setActiveSection}
      className={cn('', className)}
    >
      <h1 className='text-4xl font-bold text-center text-foreground'>Skills</h1>
    </FullPageSection>
  )
}