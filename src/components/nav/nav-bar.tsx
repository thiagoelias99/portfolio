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
    { href: '#section_contacts', label: translation.nav_items.contact }
  ]

  return (
    <nav className='h-full bg-transparent fixed right-0 top-0 translate-y-1/3 px-8'>
      <ul className='flex flex-col justify-center items-end gap-2'>
        {anchor.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className={`text-xl font-bold ${activeSection === item.href ? 'text-blue-500' : 'text-gray-300'}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
