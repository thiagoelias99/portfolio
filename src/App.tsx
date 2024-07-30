import { useEffect, useState } from 'react'
import FullPageScroll from './components/full-page-scroll/full-page-scroll'
import FullPageSection from './components/full-page-scroll/full-page-section'
import Header from './components/header/header'
import NavBar from './components/nav/nav-bar'
import { getTranslation, ITranslation, LangOptions } from './lib/lang/lang'

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
    <div className='w-svw h-svh bg-slate-900'>
      <Header setLang={setLang} />
      <NavBar
        activeSection={activeSection}
        translation={translation}
      />
      <FullPageScroll
        className='max-w-[1200px] mx-auto'
      >
        <FullPageSection
          id='section_home'
          setActiveSection={setActiveSection}
          className={`bg-gray-400 ${headerPadding}`}>
          <h1 className='text-4xl font-bold text-center text-gray-800'>Home</h1>
        </FullPageSection>

        <FullPageSection
          id='section_skills'
          setActiveSection={setActiveSection}
          className={`bg-green-400 ${headerPadding}`}>
          <h1 className='text-4xl font-bold text-center text-gray-800'>Skills</h1>
        </FullPageSection>

        <FullPageSection
          id='section_projects'
          setActiveSection={setActiveSection}
          className={`bg-blue-400 ${headerPadding}`}>
          <h1 className='text-4xl font-bold text-center text-gray-800'>Projects</h1>
        </FullPageSection>

        <FullPageSection
          id='section_services'
          setActiveSection={setActiveSection}
          className={`bg-red-400 ${headerPadding}`}>
          <h1 className='text-4xl font-bold text-center text-gray-800'>Services</h1>
        </FullPageSection>

        <FullPageSection
          id='section_about'
          setActiveSection={setActiveSection}
          className={`bg-yellow-400 ${headerPadding}`}>
          <h1 className='text-4xl font-bold text-center text-gray-800'>About</h1>
        </FullPageSection>

        <FullPageSection
          id='section_contacts'
          setActiveSection={setActiveSection}
          className={`bg-purple-400 ${headerPadding}`}>
          <h1 className='text-4xl font-bold text-center text-gray-800'>Contacts</h1>
        </FullPageSection>
      </FullPageScroll>
    </div>
  )
}

export default App