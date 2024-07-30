import { useEffect, useState } from 'react'
import FullPageScroll from './components/full-page-scroll/full-page-scroll'
import Header from './components/header/header'
import NavBar from './components/nav/nav-bar'
import { getTranslation, ITranslation, LangOptions } from './lib/lang/lang'
import HomeSection from './sections/home'
import SkillsSection from './sections/skills'
import ProjectsSection from './sections/projects'
import ServicesSection from './sections/services'
import AboutSection from './sections/about'
import ContactsSection from './sections/contacts'

function App() {
  const [activeSection, setActiveSection] = useState('#section_home')
  const [lang, setLang] = useState<LangOptions>(LangOptions.EN)
  const [translation, setTranslation] = useState<ITranslation>(getTranslation(lang))

  const headerPadding = 'pt-16'

  useEffect(() => {
    setTranslation(getTranslation(lang))
  }
    , [lang])

  return (
    <div className='w-svw h-svh bg-background text-foreground dark'>
      <Header setLang={setLang} />
      <NavBar
        activeSection={activeSection}
        translation={translation}
      />
      <FullPageScroll
        className='max-w-[1200px] mx-auto'
      >
        <HomeSection
          setActiveSection={setActiveSection}
          className={headerPadding}
        />

        <SkillsSection
          setActiveSection={setActiveSection}
          className={headerPadding}
        />

        <ProjectsSection
          setActiveSection={setActiveSection}
          className={headerPadding}
        />

        <ServicesSection
          setActiveSection={setActiveSection}
          className={headerPadding}
        />

        <AboutSection
          setActiveSection={setActiveSection}
          className={headerPadding}
        />

        <ContactsSection
          setActiveSection={setActiveSection}
          className={headerPadding}
        />
      </FullPageScroll>
    </div>
  )
}

export default App