import FullPageSection from '@/components/full-page-scroll/full-page-section'
import { cn } from '@/lib/utils'
import { ClassNameValue } from 'tailwind-merge'
import coverPhoto from '../assets/cover_photo.jpg'
import { ITranslation } from '@/lib/lang/lang'
import IconsInfiniteScroll from './_components/icons-infinite-scroll'

interface ISectionHomeProps {
  setActiveSection: (section: string) => void
  translation: ITranslation
  className?: ClassNameValue
}

export default function HomeSection({ translation, setActiveSection, className }: ISectionHomeProps) {
  const [welcomePhrasePart1, welcomePhrasePart2] = translation.home.welcome.split(translation.name)

  return (
    <FullPageSection
      id='section_home'
      setActiveSection={setActiveSection}
      className={cn('text-foreground flex flex-col justify-start relative', className)}
    >
      <div className='w-full max-w-[1200px] mx-auto -translate-y-8'>
        <div className='w-full h-full max-h-[560px] flex justify-between items-center gap-4'>
          <div className='w-[520px] flex flex-col h-full justify-center items-start gap-20'>
            <div className='w-full flex flex-col gap-4'>
              <h1 className='text-6xl font-bold text-start'>{translation.home.title}</h1>
              <strong className='text-2xl font-semibold text-primary'>{translation.home.phrase}</strong>
              <p className='text-lg'>{welcomePhrasePart1} <strong className='text-primary'>{translation.name}</strong> {welcomePhrasePart2}</p>
            </div>
          </div>
          <div className='w-[360px]'>
            <img
              src={coverPhoto}
              alt={translation.home.coverAlt}
              className='h-72 w-72 object-cover'
            />
          </div>
        </div>
        <div className='flex flex-row justify-start items-start gap-16'>
          <p className='max-w-[280px]'>{translation.home.firstSkill}</p>
          <p className='max-w-[280px]'>{translation.home.secondSkill}</p>
        </div>
      </div>
      <div className='flex space-x-20 overflow-hidden bg-white absolute left-0 bottom-0 right-0 py-2'>
        <IconsInfiniteScroll />
        <IconsInfiniteScroll hidden/>
        <IconsInfiniteScroll hidden/>
        <IconsInfiniteScroll hidden/>
        <IconsInfiniteScroll hidden/>
      </div>
    </FullPageSection>
  )
}