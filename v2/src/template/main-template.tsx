import Header from "../components/header"
import { Outlet, useLocation } from "react-router"
import ContactSection from "../sections/contact"
import Footer from "../components/footer"
import { useEffect } from "react"

export default function MainTemplate() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div>
      <Header />
      <main>
        <Outlet />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
