import Header from "./components/header"
import AboutSection from "./sections/about"
import ContactSection from "./sections/contact"
import HeroSection from "./sections/hero"
import ProjectsSection from "./sections/projects"

function App() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

export default App
