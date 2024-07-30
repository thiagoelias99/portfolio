interface NavBarProps {
  activeSection: string
}

interface IAppAnchor {
  href: string
  label: string
}

export default function NavBar({ activeSection }: NavBarProps) {

  const anchor: IAppAnchor[] = [
    { href: '#section_home', label: 'Home' },
    { href: '#section_skills', label: 'Skills' },
    { href: '#section_projects', label: 'Projects' },
    { href: '#section_services', label: 'Services' },
    { href: '#section_about', label: 'About' },
    { href: '#section_contacts', label: 'Contacts' }
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
