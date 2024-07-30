import FullPageSection from '@/components/full-page-scroll/full-page-section'
import { cn } from '@/lib/utils'
import { ClassNameValue } from 'tailwind-merge'

interface ISectionHomeProps {
  setActiveSection: (section: string) => void
  className?: ClassNameValue
}

export default function ServicesSection({ setActiveSection, className }: ISectionHomeProps) {
  return (
    <FullPageSection
      id='section_services'
      setActiveSection={setActiveSection}
      className={cn('', className)}
    >
      <h1 className='text-4xl font-bold text-center text-foreground'>Services</h1>
    </FullPageSection>
  )
}