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

function App() {
  const [activeSection, setActiveSection] = useState('#section_home')
  const [lang, setLang] = useState<LangOptions>(LangOptions.EN)
  const [translation, setTranslation] = useState<ITranslation>(getTranslation(lang))

  const headerPadding = 'pt-32 md:pt-16'

  useEffect(() => {
    setTranslation(getTranslation(lang))
  }
    , [lang])

  return (
    <div className='w-svw h-screen bg-background text-foreground dark'>
      <Header lang={lang} setLang={setLang} />
      <NavBar
        activeSection={activeSection}
        translation={translation}
      />
      <FullPageScroll
        className=''
      >
        <HomeSection
          translation={translation}
          setActiveSection={setActiveSection}
          className={`px-4 md:px-16 ${headerPadding}`}
        />

        <SkillsSection
          translation={translation}
          setActiveSection={setActiveSection}
          className={headerPadding}
        />

        <ProjectsSection
          translation={translation}
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
      </FullPageScroll>
    </div>
  )
}

export default App