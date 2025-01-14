import type { Metadata } from "next"
import './swiper.min.css'
import './pagination.min.css'
import './navigation.min.css'
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ContactSection } from "@/sections"


export const metadata: Metadata = {
  title: "Thiago Elias - Desenvolvedor de Aplicações",
  description: "Desenvolvedor especializado em aplicações web, mobile e desktop, com mais de 15 anos de experiência no desenvolvimento de software",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased`}
      >
        <Header />
        <main>
          {children}
          <ContactSection />
        </main>
        <Footer />
      </body>
    </html>
  )
}
