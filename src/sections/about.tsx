import FullPageSection from '@/components/full-page-scroll/full-page-section'
import SectionTitle from '@/components/ui/section-title'
import { ITranslation } from '@/lib/lang/lang'
import { cn } from '@/lib/utils'
import { ClassNameValue } from 'tailwind-merge'

interface ISectionHomeProps {
  setActiveSection: (section: string) => void
  translation: ITranslation
  className?: ClassNameValue
}

export default function AboutSection({ setActiveSection, className, translation }: ISectionHomeProps) {

  function Marker() {
    return <div className='mt-2.5 md:mt-3.5 w-28 md:w-12 h-1 bg-primary rounded-l-full'></div>
  }

  return (
    <FullPageSection
      id='section_about'
      setActiveSection={setActiveSection}
      className={cn('max-w-screen-xl mx-auto px-4 md:px-0', className)}
    >
      <SectionTitle>{translation.about.title}</SectionTitle>
      <div className='pt-4'>
        <p className='text-lg md:text-2xl md:pt-4'>{translation.about.presentation} <strong className='text-primary font-medium'>{translation.about.emphasis} </strong>{translation.about.presentationContinuation}</p>
        <p className='text-base md:pt-1 md:text-xl'>{translation.about.presentation2}</p>
        <ul className='pl-4 pt-4 md:pt-8 text-base md:text-xl flex flex-col justify-start gap-4'>
          {translation.about.listItems.map((item, index) => (
            <li key={index} className='flex justify-start items-start gap-2'>
              <Marker />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </FullPageSection>
  )
}