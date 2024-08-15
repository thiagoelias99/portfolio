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
    { href: `#${translation.nav_items.home.toLowerCase()}`, label: translation.nav_items.home },
    { href: `#${translation.nav_items.about.toLowerCase()}`, label: translation.nav_items.about },
    // { href: '#section_skills', label: translation.nav_items.skills },
    { href: `#${translation.nav_items.projects.toLowerCase()}`, label: translation.nav_items.projects },
    { href: `#${translation.nav_items.services.toLowerCase()}`, label: translation.nav_items.services },
    { href: `#${translation.nav_items.contact.toLowerCase()}`, label: translation.nav_items.contact },
  ]

  return (
    <nav className='w-full xl:w-auto h-auto bg-background xl:bg-transparent fixed right-0 top-0 translate-y-16 xl:translate-y-20 pb-2 xl:pb-0 px-1 xl:px-8 z-30'>
      <ul className='flex xl:flex-col justify-evenly xl:justify-center items-end gap-x-4 xl:gap-2 flex-wrap xl:flex-nowrap'>
        {anchor.map((item, index) => (
          <li key={index}
            className='transform hover:scale-110 transition-transform duration-300'
          >
            <a
              href={item.href}
              className={`text-base xl:text-xl ${activeSection === item.href ? 'text-foreground font-semibold xl:font-bold' : 'text-foreground opacity-50'}`}
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