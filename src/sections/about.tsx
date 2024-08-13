import FullPageSection from '@/components/full-page-scroll/full-page-section'
import SectionP from '@/components/ui/section-p'
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

  function SkillItem(props: { href: string, imgSrc: string, title: string, description: string }) {
    return (
      <li className='bg-card w-full flex flex-col justify-center items-center p-6 rounded-xl cursor-pointer border-2 border-transparent hover:border-primary transition-all duration-300'>
        <a
          href={props.href}
          target='_blank'
          className='contents'>
          <div className='size-12 min-h-12'>
            <img src={props.imgSrc}
              className=''
              alt='Next.js Logo'
            />

          </div>
          <h3 className='font-semibold'>{props.title}</h3>
          <p className='text-xs'>{props.description}</p>
        </a>
      </li>
    )
  }

  const skillItems = [
    {
      href: 'https://nextjs.org/',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      title: 'Next.js',
      description: translation.about.webFramework
    },
    {
      href: 'https://nestjs.com/',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
      title: 'Nest.js',
      description: translation.about.backendFramework
    },
    {
      href: 'https://reactnative.dev/',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      title: 'React Native',
      description: translation.about.mobileFramework
    },
    {
      href: 'https://tauri.app/',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tauri/tauri-original.svg',
      title: 'Tauri',
      description: translation.about.desktopFramework
    },
    {
      href: 'https://www.typescriptlang.org/',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      title: 'TypeScript',
      description: translation.about.language
    },
    {
      href: 'https://www.rust-lang.org/',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg',
      title: 'Rust',
      description: translation.about.language
    },
    {
      href: 'https://learn.microsoft.com/pt-br/cpp/cpp/?view=msvc-170',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
      title: 'C++',
      description: translation.about.language
    },
    {
      href: 'https://www.ni.com/en/shop/labview.html',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/labview/labview-original.svg',
      title: 'LabVIEW',
      description: translation.about.language
    },
    {
      href: 'https://www.sqlite.org/',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg',
      title: 'SQLite',
      description: translation.about.database
    },
    {
      href: 'https://www.postgresql.org/',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      title: 'PostgreSQL',
      description: translation.about.database
    },
    {
      href: 'https://www.mongodb.com/',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
      title: 'MongoDB',
      description: translation.about.database
    },
    {
      href: 'https://firebase.google.com/',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg',
      title: 'Firebase',
      description: 'PaaS'
    },
    {
      href: 'https://www.arduino.cc/',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg',
      title: 'Arduino',
      description: 'Hardware'
    },
    {
      href: 'https://www.raspberrypi.com/',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg',
      title: 'Raspberry Pi',
      description: 'Hardware'
    }
  ]

  return (
    <FullPageSection
      id='section_about'
      setActiveSection={setActiveSection}
      className={cn('max-w-screen-xl mx-auto px-4 h-auto', className)}
    >
      <SectionTitle>{translation.about.title}</SectionTitle>
      <div className='pt-4'>
        <p className='text-lg md:text-2xl md:pt-4'>{translation.about.presentation} <strong className='text-primary font-medium'>{translation.about.emphasis} </strong>{translation.about.presentationContinuation}</p>
        <SectionP>{translation.about.presentation2}</SectionP>
        <ul className='pl-4 pt-4 md:pt-8 text-base md:text-xl flex flex-col justify-start gap-4'>
          {translation.about.listItems.map((item, index) => (
            <li key={index} className='flex justify-start items-start gap-2'>
              <Marker />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <section className='w-full py-20 flex flex-col justify-start items-center'>
        <SectionTitle noUnderline>{translation.about.skills}</SectionTitle>
        <SectionP className="md:pt-4 max-w-prose">{translation.about.skillsNote}</SectionP>
        <ul className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-center items-center gap-4 p-4'>
          {skillItems.map((item, index) => (
            <SkillItem
              key={index}
              href={item.href}
              imgSrc={item.imgSrc}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
      </section>
    </FullPageSection>
  )
}