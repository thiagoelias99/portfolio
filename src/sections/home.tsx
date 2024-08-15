import FullPageSection from '@/components/full-page-scroll/full-page-section'
import { cn } from '@/lib/utils'
import { ClassNameValue } from 'tailwind-merge'
import coverPhoto from '../assets/cover_photo.png'
import { ITranslation, LangOptions } from '@/lib/lang/lang'
import { FlipWords } from '@/components/ui/flip-words'
import SectionScrollDown from '@/components/ui/section-scroll-down'

interface ISectionHomeProps {
  setActiveSection: (section: string) => void
  translation: ITranslation
  className?: ClassNameValue
}

export default function HomeSection({ translation, setActiveSection, className }: ISectionHomeProps) {
  return (
    <FullPageSection
      id={translation.nav_items.home.toLowerCase()}
      disableScrollDownNotification
      setActiveSection={setActiveSection}
      className={cn('text-foreground flex flex-col justify-start relative max-w-screen-xl mx-auto', className)}
    >
      <section className="mt-2 md:mt-8 w-full h-full bg-transparent overflow-x-clip">
        <div className='relative w-full h-full flex flex-col'>
          <h1 className='text-xl md:mt-14 lg:text-2xl lg:mt-20'>{translation.home.hello}<strong className='text-primary text-4xl lg:text-6xl font-serif font-semibold'>{translation.name}</strong></h1>
          <div className={cn('mt-0 lg:mt-4 flex flex-row gap-1 lg:gap-4 text-start p-0 text-2xl lg:text-4xl font-semibold items-start w-full', translation.lang === LangOptions.PT_BR ? "flex-row-reverse justify-end" : "")}>
            <h3><FlipWords words={translation.home.words} /></h3>
            <h2>{translation.home.title}</h2>
          </div>
          <img
            src={coverPhoto}
            alt={translation.home.coverAlt}
            draggable={false}
            className='md:absolute -translate-x-14 md:translate-x-16 md:-translate-y-12 w-full mt-2 top-0 right-0 object-cover md:rounded-none opacity-80'
          />
          <a
            href='#section_contacts'
            className='w-56 mt-8 md:mt-6 self-center md:self-auto border-primary border-4 rounded px-6 py-2 text-primary text-base lg:text-lg font-semibold text-center cursor-pointer z-20'>{translation.home.contact}</a>
        </div>
      </section>
      <SectionScrollDown className="absolute bottom-0 left-0 right-0" />
    </FullPageSection>
  )
}