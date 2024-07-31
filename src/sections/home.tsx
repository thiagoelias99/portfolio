import FullPageSection from '@/components/full-page-scroll/full-page-section'
import { cn } from '@/lib/utils'
import { ClassNameValue } from 'tailwind-merge'
import coverPhoto from '../assets/cover_photo.jpg'
import { ITranslation } from '@/lib/lang/lang'
import IconsInfiniteScroll from './_components/icons-infinite-scroll'
import { MailIcon } from 'lucide-react'

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
      <div className='w-full max-w-[1200px] mx-auto sm:-translate-y-14 flex flex-col justify-center items-center sm:pt-16 gap-4'>
        <div className='w-full h-full flex flex-col sm:flex-row justify-start sm:justify-center items-center gap-2 sm:gap-4'>
          <div className='w-full max-w-[520px] flex flex-col justify-start sm:justify-center items-start gap-1 sm:gap-4'>
            <h1 className='text-3xl sm:text-6xl font-bold text-start'>{translation.home.title}</h1>
            <strong className='text-xl sm:text-2xl font-semibold text-primary'>{translation.home.phrase}</strong>
            <p className='hidden sm:block text-base sm:text-lg'>{welcomePhrasePart1} <strong className='text-primary'>{translation.name}</strong>{welcomePhrasePart2}</p>
          </div>
          <div className='bg-card sm:bg-transparent p-3 rounded-md w-full max-w-[360px] flex sm:flex-col sm:gap-4 justify-around sm:justify-start items-center gap-1 shadow-shape sm:shadow-none'>
            <div className='space-y-3'>
              <p className='sm:hidden text-base sm:text-lg'>{welcomePhrasePart1} <strong className='text-primary'>{translation.name}</strong>{welcomePhrasePart2}</p>
              <div className='sm:hidden w-full flex justify-center items-start gap-4'>
                <a target='blank' rel='noreferrer' href={translation.linkedIn} className='cursor-pointer'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                    className='h-7 w-7'
                  />
                </a>
                <a target='_blank' rel='noreferrer' href={translation.github} className='cursor-pointer'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
                    className='h-7 w-7 bg-white p-0.5 rounded'
                  />
                </a>
                <a target='_blank' rel='noreferrer' href={`mailto:${translation.email}`} className='cursor-pointer'>
                  <MailIcon className='h-7 w-7' />
                </a>
              </div>
            </div>
            <img
              src={coverPhoto}
              alt={translation.home.coverAlt}
              className='float-right sm:float-none h-44 w-44 sm:h-72 sm:w-72 object-cover rounded-full sm:rounded-none'
            />
            <div className='hidden w-full sm:flex justify-center items-start gap-4'>
              <a target='blank' rel='noreferrer' href={translation.linkedIn} className='cursor-pointer'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                  className='h-10 w-10'
                />
              </a>
              <a target='_blank' rel='noreferrer' href={translation.github} className='cursor-pointer'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
                  className='h-10 w-10 bg-white p-0.5 rounded'
                />
              </a>
              <a target='_blank' rel='noreferrer' href={`mailto:${translation.email}`} className='cursor-pointer'>
                <MailIcon className='h-10 w-10' />
              </a>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-row justify-between sm:justify-start items-start gap-6 sm:gap-16'>
          <p className='w-full max-w-[280px] text-sm sm:text-base'>{translation.home.firstSkill}</p>
          <p className='w-full max-w-[280px] text-sm sm:text-base'>{translation.home.secondSkill}</p>
        </div>
      </div>
      <div className='hidden sm:flex space-x-20 overflow-hidden bg-white absolute left-0 bottom-0 right-0 py-2'>
        <IconsInfiniteScroll />
        <IconsInfiniteScroll hidden />
        <IconsInfiniteScroll hidden />
        <IconsInfiniteScroll hidden />
        <IconsInfiniteScroll hidden />
      </div>
    </FullPageSection>
  )
}