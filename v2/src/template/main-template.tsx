import Header from "../components/header"
import { Outlet } from "react-router"
import ContactSection from "../sections/contact"
import Footer from "../components/footer"

export default function MainTemplate() {
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
