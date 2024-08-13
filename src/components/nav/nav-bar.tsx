import { ITranslation } from '@/lib/lang/lang'

interface NavBarProps {
  activeSection: string
  translation: ITranslation
}

interface IAppAnchor {
  href: string
  label: string
}

export default function NavBar({ activeSection, translation }: NavBarProps) {
  const anchor: IAppAnchor[] = [
    { href: '#section_home', label: translation.nav_items.home },
    { href: '#section_skills', label: translation.nav_items.skills },
    { href: '#section_projects', label: translation.nav_items.projects },
    { href: '#section_services', label: translation.nav_items.services },
    { href: '#section_about', label: translation.nav_items.about },
  ]

  return (
    <nav className='w-full lg:w-auto h-auto bg-background lg:bg-transparent fixed right-0 top-0 translate-y-16 lg:translate-y-20 pb-2 lg:pb-0 px-1 lg:px-8 z-30'>
      <ul className='flex lg:flex-col justify-evenly lg:justify-center items-end gap-x-4 lg:gap-2 flex-wrap lg:flex-nowrap'>
        {anchor.map((item, index) => (
          <li key={index}
            className='transform hover:scale-110 transition-transform duration-300'
          >
            <a
              href={item.href}
              className={`text-base lg:text-xl ${activeSection === item.href ? 'text-foreground font-semibold lg:font-bold' : 'text-foreground opacity-50'}`}
            >
              {item.label}
            </a>
            {activeSection === item.href && <div className='h-0.5 rounded-sm w-full bg-primary'></div>}
          </li>
        ))}
      </ul>
    </nav>
  )
}