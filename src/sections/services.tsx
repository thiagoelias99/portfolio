import FullPageSection from '@/components/full-page-scroll/full-page-section'
import SectionP from '@/components/ui/section-p'
import SectionTitle from '@/components/ui/section-title'
import { ITranslation } from '@/lib/lang/lang'
import { cn } from '@/lib/utils'
import { ClassNameValue } from 'tailwind-merge'
import ServiceCard from './_components/service-card'

interface ISectionHomeProps {
  setActiveSection: (section: string) => void
  translation: ITranslation
  className?: ClassNameValue
}

export default function ServicesSection({ setActiveSection, className, translation }: ISectionHomeProps) {
  return (
    <FullPageSection
      id={translation.nav_items.services.toLowerCase()}
      setActiveSection={setActiveSection}
      className={cn('max-w-screen-xl mx-auto px-4 h-auto', className)}
    >
      <SectionTitle>{translation.services.title}</SectionTitle>
      <SectionP className='mt-4'>{translation.services.description}</SectionP>

      <div className='mt-8 md:mt-16 w-full flex flex-col justify-start items-start gap-8 md:gap-16 pb-10 sm:pb-20'>
        {translation.services.services.map(service => (
          <ServiceCard key={service.name} service={service} translation={translation} />
        ))}
      </div>
    </FullPageSection>
  )
}